// Doc generation cleanup module.
//
// This should be run after all package docs have been generated into the
// ./docs/packages directory, so this can clean up those 

import { writeFile, cp, rmdir } from 'node:fs/promises';
import { join } from 'node:path';

// Constants
const DOCS_ROOT_DIR = join(__dirname, './docs');
const PACKAGES_ROOT_DIR = join(DOCS_ROOT_DIR, './packages');
const CATEGORY_FILE_NAME = '_category_.json';

const packageNames = {
  IrsdkNode: 'irsdk-node',
  Native: '@irsdk-node/native',
  Types: '@irsdk-node/types',
} as const;

const targetFolders = {
  IrsdkNode: 'irsdk-node',
  Native: 'irsdk-node-native',
  Types: 'irsdk-node-types',
} as const;

interface CategoryFile {
  position: number;
  label: string;
  collapsible: boolean;
  collapsed: boolean;
}

// Utils
async function writeCategoryFile(
  packageName: string,
  dirPath: string,
  position: number
): Promise<void> {
  const contents: CategoryFile = {
    position,
    label: packageName,
    collapsed: true,
    collapsible: true,
  };

  const filePath = join(dirPath, CATEGORY_FILE_NAME);
  await writeFile(filePath, JSON.stringify(contents, null, 2), {
    encoding: 'utf-8',
  });
}

async function movePackageFolders(): Promise<void> {
  const origNativeDirPkg = join(PACKAGES_ROOT_DIR, packageNames.Native);
  const targetNativeDirPkg = join(PACKAGES_ROOT_DIR, targetFolders.Native);
  const origTypesDirPkg = join(PACKAGES_ROOT_DIR, packageNames.Types);
  const targetTypesDirPkg = join(PACKAGES_ROOT_DIR, targetFolders.Types);

  // Copy the directories to the correct place.
  await Promise.all([
    cp(origNativeDirPkg, targetNativeDirPkg, { recursive: true }),
    cp(origTypesDirPkg, targetTypesDirPkg, { recursive: true }),
  ]);

  // Remove the old directories.
  await Promise.all([
    rmdir(origNativeDirPkg),
    rmdir(origTypesDirPkg),
  ]);
}

(async function main(): Promise<void> {
  try {
    // Move packages to their correct place
    await movePackageFolders();
    
    // Write all of the category files
    await Promise.all([
      writeCategoryFile(packageNames.IrsdkNode, join(PACKAGES_ROOT_DIR, targetFolders.IrsdkNode), 1),
      writeCategoryFile(packageNames.Types, join(PACKAGES_ROOT_DIR, targetFolders.Types), 2),
      writeCategoryFile(packageNames.Native, join(PACKAGES_ROOT_DIR, targetFolders.Native), 3),
    ]);

    process.exit(0);
  } catch (err) {

    process.exit(1);
  }
})();
