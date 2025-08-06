import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Keycapsss Help Site",
  description: "Help site from Keycapsss.com with build-guides and news board.",
  ignoreDeadLinks: true,
  sitemap: {
    hostname: "https://help.keycapsss.com",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: "/keycapsss-logo.svg",
    // siteTitle: false,
    editLink: {
      pattern:
        "https://github.com/Keycapsss/keycapsss-help-site/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
    externalLinkIcon: true,
    nav: [
      // { text: "Home", link: "/" },
      // { text: "Build-Guides", link: "/build-guides/forager/" },
    ],

    sidebar: [
      {
        text: "Shop Now",
        link: "https://keycapsss.com",
      },
      {
        text: "Build-Guides",
        items: [
          { text: "3W6", link: "/build-guides/3w6/" },
          { text: "Cirque-Trackpad", link: "/build-guides/cirque-trackpad/" },
          { text: "Forager", link: "/build-guides/forager/" },
          { text: "Kimiko", link: "/build-guides/kimiko/" },
          { text: "Lily58L", link: "/build-guides/lily58l/" },
          { text: "Plaid-Pad", link: "/build-guides/plaid-pad/" },
          { text: "Prospector", link: "/build-guides/prospector/" },
          { text: "Puchi-BLE", link: "/build-guides/puchi-ble/" },
          { text: "Reviung41", link: "/build-guides/reviung41/" },
        ],
      },
    ],

    socialLinks: [
      // You can add any icon from simple-icons (https://simpleicons.org/):
      { icon: "github", link: "https://github.com/keycapsss" },
      { icon: "discord", link: "https://discord.gg/frjFXZB" },
      { icon: "mastodon", link: "https://chaos.social/deck/@keycapsss" },
      {
        icon: "telegram",
        link: "https://t.me/joinchat/HUxXXhZeilwa0DS02G2N4A",
      },
    ],
  },
});
