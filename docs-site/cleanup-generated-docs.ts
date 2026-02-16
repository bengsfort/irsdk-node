// Doc generation cleanup module.
//
// This should be run after all package docs have been generated into the
// ./docs/packages directory, so this can clean up those 

import { writeFile, readFile, cp, rm } from 'node:fs/promises';
import { join, relative } from 'node:path';

// Constants
const CATEGORY_FILE_NAME = '_category_.json';
const DOCS_ROOT_DIR = join(__dirname, './docs');
const PACKAGES_ROOT_DIR = join(DOCS_ROOT_DIR, './10-Packages');
const GEN_FOLDER_DIR = join(__dirname, '_gen_');
const GEN_DOCS_OUTDIR = 'API-Reference';

interface PackageDefinition {
  readonly name: string;
  readonly generatedDocs: string;
  readonly docsRoot: string;
  readonly sidebarOrder?: number;
}

const Packages = {
  IrsdkNode: {
    name: 'irsdk-node',
    generatedDocs: join(GEN_FOLDER_DIR, 'irsdk-node'),
    docsRoot: DOCS_ROOT_DIR,
    sidebarOrder: 9,
  } satisfies PackageDefinition,
  Native: {
    name: '@irsdk-node/native',
    generatedDocs: join(GEN_FOLDER_DIR, '@irsdk-node/native'),
    docsRoot: join(PACKAGES_ROOT_DIR, 'irsdk-node-native'),
  } satisfies PackageDefinition,
  Types: {
    name: '@irsdk-node/types',
    generatedDocs: join(GEN_FOLDER_DIR, '@irsdk-node/types'),
    docsRoot: join(PACKAGES_ROOT_DIR, 'irsdk-node-types'),
  } satisfies PackageDefinition,
} as const;

interface CategoryFile {
  label: string;
  position?: number;
  collapsible?: boolean;
  collapsed?: boolean;
}

// Utils
const getGenDocsPath = (base: string, order?: number): string => {
  const outDir = typeof order === 'number'
    ? `${order}-${GEN_DOCS_OUTDIR}`
    : GEN_DOCS_OUTDIR;
  return join(base, outDir);
};

// Write category definition files.
async function writeCategoryFiles(packages: PackageDefinition[]): Promise<void> {
  console.log('Writing docusaurus category files:');

  const promises = packages.map((packageDef) => {
    const contents: CategoryFile = {
      label: "API Reference",
      collapsed: true,
      collapsible: true,
    };

    const filePath = join(getGenDocsPath(packageDef.docsRoot, packageDef.sidebarOrder), CATEGORY_FILE_NAME);
    console.log(` - ${contents.label} -> ${relative(__dirname, filePath)}`);
    return writeFile(filePath, JSON.stringify(contents, null, 2), {
      encoding: 'utf-8',
    });
  });
  
  await Promise.all(promises);
}

// Copy the directories to the correct place.
async function movePackageFolders(packages: PackageDefinition[]): Promise<void> {
  console.log('Moving generated docs to docusaurus docs:');

  const promises = packages.map((packageDef) => {
    const src = packageDef.generatedDocs;
    const dest = getGenDocsPath(packageDef.docsRoot, packageDef.sidebarOrder);
    
    console.log(` - ${relative(__dirname, src)} -> ${relative(__dirname, dest)}`);
    return cp(src, dest, { recursive: true });
  });

  await Promise.all(promises);

  console.log(`Removing generated docs folder (${relative(__dirname, GEN_FOLDER_DIR)})`);
  // Remove the old directories.
  await rm(GEN_FOLDER_DIR, { recursive: true, force: true });
}

// Inject frontmatter into each API Reference root
async function injectIndexFrontmatter(packages: PackageDefinition[]): Promise<void> {
  console.log('Injecting frontmatter into each generated docs root file:');

  const promises = packages.map(async (packageDef) => {
    const docsRoot = getGenDocsPath(packageDef.docsRoot, packageDef.sidebarOrder);
    const readmePath = join(docsRoot, 'README.md');
    console.log(` - ${relative(__dirname, readmePath)}`);

    const contents = await readFile(readmePath, { encoding: 'utf-8' });
    const header = [
      '---',
      `title: "API Reference"`,
      '---',
      '',
      '<!-- NOTE: THIS FILE IS AUTO-GENERATED VIA `pnpm docs:gen`, DO NOT EDIT! -->',
      '',
      '# API Reference',
      '',
      `Generated API reference for the \`${packageDef.name}\` package.`,
      '\n',
    ].join('\n');

    await writeFile(readmePath, header + contents, {
      encoding: 'utf-8',
    });
  });

  await Promise.all(promises);
}

(async function main(): Promise<void> {
  try {
    console.log('Cleaning up auto-generated docs.');
    const packages = [Packages.IrsdkNode, Packages.Native, Packages.Types];

    await movePackageFolders(packages);
    await writeCategoryFiles(packages);
    await injectIndexFrontmatter(packages);

    process.exit(0);
  } catch (err) {
    console.error('Failed to cleanup generated docs:', err);
    process.exit(1);
  }
})();
