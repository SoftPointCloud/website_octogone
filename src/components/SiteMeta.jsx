import { useEffect } from "react";

function upsertMeta({ attr, key, content }) {
  if (!content) return;

  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector);

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

export default function SiteMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    upsertMeta({ attr: "name", key: "description", content: description });
    upsertMeta({ attr: "property", key: "og:title", content: title });
    upsertMeta({ attr: "property", key: "og:description", content: description });
    upsertMeta({ attr: "name", key: "twitter:title", content: title });
    upsertMeta({ attr: "name", key: "twitter:description", content: description });
  }, [title, description]);

  return null;
}
