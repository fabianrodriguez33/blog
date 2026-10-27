export type Comment = { id: string; name: string; text: string; date: string };
export type PostData = { likes: number; comments: Comment[] };

const key = (slug: string) => `iadw-${slug}`;

function readLocal(slug: string): PostData {
  try {
    const raw = localStorage.getItem(key(slug));
    if (raw) return JSON.parse(raw) as PostData;
  } catch { /* ignore */ }
  return { likes: 0, comments: [] };
}

function writeLocal(slug: string, data: PostData) {
  try { localStorage.setItem(key(slug), JSON.stringify(data)); } catch { /* ignore */ }
}

async function remote(slug: string, body?: object): Promise<PostData> {
  const res = await fetch(`/.netlify/functions/interact?slug=${slug}`, {
    method: body ? "POST" : "GET",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const type = res.headers.get("content-type") || "";
  if (!res.ok || !type.includes("application/json")) throw new Error("backend unavailable");
  return (await res.json()) as PostData;
}

// Uses the Netlify Function (shared, persistent) and falls back to localStorage.
export async function load(slug: string): Promise<PostData> {
  try { return await remote(slug); } catch { return readLocal(slug); }
}

export async function like(slug: string): Promise<PostData> {
  try { return await remote(slug, { action: "like" }); } catch {
    const d = readLocal(slug);
    d.likes += 1;
    writeLocal(slug, d);
    return d;
  }
}

export async function comment(slug: string, name: string, text: string): Promise<PostData> {
  try { return await remote(slug, { action: "comment", name, text }); } catch {
    const d = readLocal(slug);
    d.comments.unshift({ id: crypto.randomUUID(), name, text, date: new Date().toISOString() });
    writeLocal(slug, d);
    return d;
  }
}
