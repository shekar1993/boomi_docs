// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
const isNewRelicEnabled = process.env.NEW_RELIC_ENABLED === 'true';
const isLocal = process.env.NODE_ENV === 'development';
console.log('New Relic Enabled:', isNewRelicEnabled); // Log this for verification


const getBranchUrl = (branch) => {
  const branchUrls = {
    'develop': 'https://develop.dev.help.boomi.com',
    'hotfix-content': 'https://hotfix-content.dev.help.boomi.com',
    'platform-release': 'https://platform-release.dev.help.boomi.com',
    'runtime-release': 'https://runtime-release.dev.help.boomi.com',
    'staging': 'https://staging.dev.help.boomi.com'
  };
  return branchUrls[branch] || `https://${branch}.dev.help.boomi.com`;
};

const getDeployUrl = () => {
  if (isLocal) {
    return 'http://localhost:3000'; // Default Docusaurus development port
  }
  switch (process.env.CONTEXT) {
    case 'production':
      return 'https://help.boomi.com';
    case 'branch-deploy':
      return getBranchUrl(process.env.HEAD || 'main');
    case 'deploy-preview':
      return process.env.DEPLOY_PRIME_URL;
    default:
      return 'https://help.boomi.com';
  }
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Boomi Documentation',
  tagline: 'Getting you connected',
  url: getDeployUrl(),
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/BoomiLogo.svg',
  customFields: {
    CoveoOrgIdProd: "boomiproduction308bh8om",
    CoveoOrgIdNonProd: "boominonproduction2pvg3en4c",
    CoveoAccessTokenProd: "xxd659f20d-81bf-49bd-9a9a-fa9a22129dd6",
    CoveoAccessTokenNonProd:"xxbd4f704c-e0b3-4ce6-acb5-6092b426654d",
    googleRecaptchaSiteKey: '6LetBoYqAAAAAKpqKutZA6iriqG4BpcsEbi_l4bI',
  },
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        async: 'defer',
      },
      innerHTML: `if (window.location.host === 'help.boomi.com') { !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");i.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="a2KTnyG5M4WXn5ByEizKfAYziceaKpVO";;analytics.SNIPPET_VERSION="5.2.0";
              analytics.load("a2KTnyG5M4WXn5ByEizKfAYziceaKpVO");
              analytics.page();
              analytics.identify();
              analytics.track('User visited', {
                page: 'https://help.boomi.com'
              });
            }}(); }`,
    },
    isNewRelicEnabled && {
      tagName: 'script',
      attributes: {
        src: '/js/newrelic.js',  // Local script from the static folder
        type: 'text/javascript',
        async: 'true',
      },
    },
  ].filter(Boolean),

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  /**i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      ja: {
        htmlLang: 'ja-JP',
      },
    },
  },*/
    webpack: {
      jsLoader: (isServer) => ({
        loader: require.resolve('swc-loader'),
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
            target: 'es2017',
          },
          module: {
            type: isServer ? 'commonjs' : 'es6',
          },
        },
      }),
    },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: ['./src/css/custom.css', './src/css/custom.scss'],
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-8MD86EJC0E',
        anonymizeIP: true,
      },
    ],[
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: "GTM-TW99WZQL"
      },
    ],
    'docusaurus-plugin-sass'
  ],
  clientModules: ['./scripts/cookie-consent.js', './src/components/PrintandShare/generatePdf.ts'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
          sidebar: {
            autoCollapseCategories: true,
            hideable: true
          },
        },
      navbar: {
        title: '',
        logo: {
          alt: 'Boomi Doc Site',
          src: 'img/BoomiDocLogo.svg',
          srcDark: 'img/BoomiDocLogo_dark.svg',
        },
        items: [
          // Commented out Docs and Release Notes links from MastHead as we don't need them in prod
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'releaseNotesSidebar',
          //   position: 'left',
          //   label: 'Release Notes',
          // },
          {
            type: 'localeDropdown',
            position: 'right',
            className: 'navbar__link--language',
          },
        ],
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['powershell','java','json'],
      },
    }),
};

module.exports = config;
