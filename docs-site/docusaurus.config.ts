import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'irsdk-node',
  tagline: 'Type-safe iRacing SDK for Node.js.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://irsdk-node.bengsfort.dev',
  baseUrl: '/',
  organizationName: 'bengsfort',
  projectName: 'irsdk-node',
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          editUrl:
            'https://github.com/bengsfort/irsdk-node/tree/main/docs-site',
          routeBasePath: '/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'irsdk-node',
      items: [
        {
          href: 'https://github.com/bengsfort/irsdk-node',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Packages',
          items: [
            {
              label: 'irsdk-node',
              to: '/API-Reference/irsdk-node',
            },
            {
              label: '@irsdk-node/types',
              to: '/API-Reference/irsdk-node-types',
            },
            {
              label: '@irsdk-node/native',
              to: '/API-Reference/irsdk-node-native',
            },
          ]
        },

        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/bengsfort/irsdk-node',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} bengsfort`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
