const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/DeXit/',

  siteMetadata: {
    title: 'DeXit',
    description: 'DeXit.',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {
          search: true,
          mainContainer: { fullscreen: false, align: 'center' },
          header: { icons: 'minimal', fixed: false },
          footer: { navigation: true },
          logo: {
            src: {
              light: '/public/assets/dexit_logo_light.svg',
              dark: '/public/assets/dexit_logo_light.svg',
            },
            width: 45,
          },
          menu: {
            search: false,
            headings: { rightSide: true, scrollspy: true, depth: 3 },
          },
        },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {
          searchPatterns: [
            '../**/*.{ts,tsx,js,jsx,mjs}',
            '../theme/src/gatsby-theme-docz/custom-components/**/*.{ts,tsx,js,jsx,mjs}',
            '!**/node_modules',
            '!../**/node_modules',
            '!**/doczrc.js',
            '!../**/doczrc.js',
          ],
        },
        menu: [
          'Introduction',
          'Mission',
          'Getting Started',
          'Using MetaMask on DeXit Testnet',
          'Resetting your account on Metamask',
          'Deploy Smart Contract on DeXit Network',
          'Use MetaMask For Dexit Network',
        ],
        mdPlugins: [],
        hastPlugins: [],
        ignore: ['./*.md'],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/.docz',
        base: '/DeXit/',
        source: './',
        'gatsby-root': null,
        files: '**/*.mdx',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'DeXit',
        description: 'DeXit.',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs',
          templates:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/node_modules/docz-core/dist/templates',
          docz:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/.docz',
          cache:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/.docz/.cache',
          app:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/.docz/app',
          appPackageJson:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/package.json',
          appTsConfig:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/tsconfig.json',
          gatsbyConfig:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/gatsby-config.js',
          gatsbyBrowser:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/gatsby-browser.js',
          gatsbyNode:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/gatsby-node.js',
          gatsbySSR:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/gatsby-ssr.js',
          importsJs:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/.docz/app/imports.js',
          rootJs:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/.docz/app/root.jsx',
          indexJs:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/.docz/app/index.jsx',
          indexHtml:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/.docz/app/index.html',
          db:
            '/home/benekiva/Desktop/Block-Chain/Dexit Final Github/Docs/docs/.docz/app/db.json',
        },
        lang: 'en',
        menuDisplayName: { UI: 'User Interface', Main: 'Main Container' },
        groups: { '': [] },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
