import { useRoute } from "vitepress";

const COMENTARIO_URL = "https://comments.keycapsss.com";

export function useComentario() {
  const route = useRoute();

  const getTheme = () =>
    document.documentElement.classList.contains("dark") ? "dark" : "light";

  const initialize = () => {
    if (typeof window === "undefined") return;

    // ✅ Set initial theme BEFORE loading script
    const commentsEl = document.querySelector("comentario-comments");
    if (commentsEl) {
      commentsEl.setAttribute("theme", getTheme());
    }

    // ✅ Load Comentario script
    const script = document.createElement("script");
    script.src = `${COMENTARIO_URL}/comentario.js`;
    script.setAttribute("data-url", window.location.origin + route.path);
    script.setAttribute("data-page-id", route.path);
    script.setAttribute("data-css-override", "true");
    script.async = true;
    document.head.appendChild(script);

    // ✅ Watch for VitePress theme changes
    const observer = new MutationObserver(() => {
      const comments = document.querySelector("comentario-comments");
      if (comments) comments.setAttribute("theme", getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  };

  return { initialize };
}
