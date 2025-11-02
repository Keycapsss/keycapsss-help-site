import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import Remark42 from "../components/Remark42.vue";
import type { Theme } from "vitepress";
import { YouTubeEmbed } from "@miletorix/vitepress-youtube-embed";
import "@miletorix/vitepress-youtube-embed/style.css";

import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "doc-after": () => h(Remark42),
    });
  },
  enhanceApp({ app }) {
    app.component("YouTubeEmbed", YouTubeEmbed);
  },
} satisfies Theme;
