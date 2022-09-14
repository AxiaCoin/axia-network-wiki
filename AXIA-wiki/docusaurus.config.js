const { baseUrlPattern } = require("../scripts/utils");
const { injectPlugin } = require("../scripts/injectPlugin");
const i18n = require("./i18n");

const isBuilding = process.env.BUILDING === "true";
const isPublishing = process.env.PUBLISHING === "true";

module.exports = {
  title: "AXIA Network Wiki",
  tagline:
    "Complete source of truth for AXIA network.",
  titleDelimiter: "·",
  url: "https://wiki.axiacoin.network",
  baseUrl: "/",
  projectName: "AXIA-wiki",
  organizationName: "w3f",
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.js",
    "https://unpkg.com/aos@next/dist/aos.js",
    {
      src: "https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js",
      onload: "addBackToTop()",
      defer: true,
    },
    {
      src: "https://apisa.AXIA.org/latest.js",
      async: true,
      defer: true,
    },
    "../js/custom.js",
    "../js/packaged/addressChanger.js",
    "../js/clipboard.min.js",
    "../js/copycode.js",
  ],
  stylesheets: [
    "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
    "https://fonts.googleapis.com/css?family=Work+Sans:400,700&display=swap",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    "https://unpkg.com/aos@next/dist/aos.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  i18n,
  favicon: "img/favicon.ico",
  trailingSlash: false,
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  onDuplicateRoutes: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          editUrl: ({ docPath }) =>
            `https://github.com/AxiaCoin/axia-network-wiki/edit/uat/docs/${docPath}`,
          path: "../docs",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs",
          remarkPlugins: [injectPlugin({ isAXIA: true })],
        },
        theme: {
          customCss: [
            require.resolve("./static/css/custom.css"),
            require.resolve("./static/css/copycode.css"),
            require.resolve("./static/css/socicon.css"),
          ],
        },
      },
    ],
  ],
  plugins: [
    "remark-docusaurus-tabs",
    "@docusaurus/theme-live-codeblock",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/",

            from: ["/en/latest", "/en/"],
          },
        ],
        createRedirects: function (existingPath) {
          if (existingPath.startsWith("/docs/")) {
            return [existingPath.replace("/docs/", "/docs/en/")];
          }
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: "bottom",
    },
    navbar: {
      logo: {
        src: "img/logo_AXIA_wiki.svg",
      },
      items: [
        {
          to: "docs/AXIA-Overview",
          label: "Get Started",
          position: "right",
        },
        {
          to: "docs/The-AXIA-Network",
          label: "Everyone",
          position: "right",
        },
        {
          to: "docs/Developer-Guides",
          label: "Developers",
          position: "right",
        },
        /*{
          to: "docs/maintain-index",
          label: "Admins",
          position: "right",
        },*/

        /**
         * Uncomment following when algolia api key is available
         *
         *  {
         *   type: "search",
         *   position: "right",
         * },
         * 
         **/
        /**
        {
          to: "docs/contributing",
          label: "Contribute",
          position: "right",
        }
        **/
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} AXIA Foundation`,
      logo: {
        src: "img/AXIA-blue-logo.svg",
      },
    },
    /**
    algolia: {
      apiKey: "API_KEY_HERE",
      indexName: "AXIA",
      algoliaOptions: {
        facetFilters: ["language:LANGUAGE"],
      },
    },
    **/
    docsSideNavCollapsible: true,
  },
};
