import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import Comentario from "../components/Comentario.vue";
import { YouTubeEmbed } from "@miletorix/vitepress-youtube-embed";
import type { Theme } from "vitepress";

import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "doc-after": () => h(Comentario),
      "page-bottom": () => h(Comentario),
    });
  },
  enhanceApp(ctx) {
    ctx.app.component("YouTubeEmbed", YouTubeEmbed);
  },
} satisfies Theme;
