import { getStore } from "@netlify/blobs";

const SLUGS = ["my-process", "design-tips"];
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export default async (req) => {
  const store = getStore("interactions");
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug") || "";
  if (!SLUGS.includes(slug)) return json({ error: "Unknown post" }, 400);

  const key = `post-${slug}`;
  const data = (await store.get(key, { type: "json" })) || { likes: 0, comments: [] };

  if (req.method === "POST") {
    const body = await req.json().catch(() => ({}));
    if (body.action === "like") {
      data.likes += 1;
    } else if (body.action === "comment") {
      const name = String(body.name || "").trim().slice(0, 60);
      const text = String(body.text || "").trim().slice(0, 1000);
      if (!name || !text) return json({ error: "Please fill in both fields." }, 400);
      data.comments.unshift({ id: crypto.randomUUID(), name, text, date: new Date().toISOString() });
    } else {
      return json({ error: "Bad action" }, 400);
    }
    await store.setJSON(key, data);
  }
  return json(data);
};
