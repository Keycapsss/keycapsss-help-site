import DefaultTheme from "vitepress/theme";

import { YouTubeEmbed } from "@miletorix/vitepress-youtube-embed"; // [!code ++]
import "@miletorix/vitepress-youtube-embed/style.css"; // [!code ++]

import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("YouTubeEmbed", YouTubeEmbed); // [!code ++]
  },
};
