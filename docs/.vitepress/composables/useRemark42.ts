import { useRoute, useData } from "vitepress";
import { watch, onMounted } from "vue";

const REMARK_CONFIG = {
  host: "https://comments.keycapsss.com",
  site_id: "keycapsss",
  theme: "light",
  components: ["embed"], // Add components config
  max_shown_comments: 100,
  simple_view: false,
};

export function useRemark42(elementId: string) {
  const route = useRoute();
  const { isDark } = useData();

  const updateTheme = (dark: boolean) => {
    const remark42 = window.REMARK42;
    if (remark42) {
      remark42.changeTheme(dark ? "dark" : "light");
    }
  };

  const initialize = () => {
    if (typeof window === "undefined") return;

    window.remark_config = {
      ...REMARK_CONFIG,
      theme: isDark.value ? "dark" : "light",
      url: window.location.origin + route.path, // Use full URL
      page_title: document.title,
    };

    const existingScript = document.getElementById("remark42-script");
    if (existingScript) {
      const remark42 = window.REMARK42;
      if (remark42) {
        remark42.createInstance({
          node: document.getElementById(elementId),
          ...window.remark_config,
        });
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "remark42-script";
    script.src = `${REMARK_CONFIG.host}/web/embed.js`;
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);
  };

  const destroy = () => {
    const remark42 = window.REMARK42;
    if (remark42) {
      remark42.destroy();
    }
  };

  // Watch for route changes
  watch(
    () => route.path,
    () => {
      destroy();
      setTimeout(initialize, 100);
    }
  );

  watch(isDark, updateTheme);

  onMounted(() => {
    initialize();
  });

  return {
    initialize,
    destroy,
  };
}

declare global {
  interface Window {
    REMARK42: any;
    remark_config: typeof REMARK_CONFIG;
  }
}
