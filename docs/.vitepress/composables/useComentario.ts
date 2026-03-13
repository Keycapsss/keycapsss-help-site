import { useRoute } from "vitepress";

const COMENTARIO_URL = "https://comments.benroe.de";

export function useComentario(): {
  initialize: () => void;
  cleanup: () => void;
} {
  const route = useRoute();
  let observer: MutationObserver | null = null;

  const getTheme = () =>
    document.documentElement.classList.contains("dark") ? "dark" : "light";

  const initialize = () => {
    if (typeof window === "undefined") return;

    // Set initial theme BEFORE loading script
    const commentsEl = document.querySelector("comentario-comments");
    if (commentsEl) {
      commentsEl.setAttribute("theme", getTheme());
    }

    // Load Comentario script (only if not already loaded)
    const scriptSrc = `${COMENTARIO_URL}/comentario.js`;
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.setAttribute("data-url", window.location.origin + route.path);
      script.setAttribute("data-page-id", route.path);
      script.setAttribute("data-css-override", "true");
      script.async = true;
      document.head.appendChild(script);
    }

    // Watch for VitePress theme changes
    observer = new MutationObserver(() => {
      const comments = document.querySelector("comentario-comments");
      if (comments) comments.setAttribute("theme", getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  };

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  return { initialize, cleanup };
}
