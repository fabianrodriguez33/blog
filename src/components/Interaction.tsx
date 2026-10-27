import { FormEvent, useEffect, useState } from "react";
import { PostData, comment, like, load } from "../api";

export default function Interaction({ slug }: { slug: string }) {
  const [data, setData] = useState<PostData>({ likes: 0, comments: [] });
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => { load(slug).then(setData); }, [slug]);

  async function onLike() {
    setData((d) => ({ ...d, likes: d.likes + 1 }));
    setData(await like(slug));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      setMsg({ ok: false, text: "Please fill in both fields." });
      return;
    }
    setData(await comment(slug, name.trim(), text.trim()));
    setName(""); setText("");
    setMsg({ ok: true, text: "Thanks! Your comment has been posted." });
  }

  return (
    <section className="interaction">
      <button className="like" onClick={onLike} aria-label="Like this post">
        ♥ Like this post · {data.likes} {data.likes === 1 ? "like" : "likes"}
      </button>

      <h2>Comments ({data.comments.length})</h2>
      <form onSubmit={onSubmit} noValidate>
        <label>Your name
          <input value={name} onChange={(e) => setName(e.target.value)} maxLength={60} />
        </label>
        <label>Your comment
          <textarea rows={4} value={text} onChange={(e) => setText(e.target.value)} maxLength={1000} />
        </label>
        <button type="submit" className="btn">Post comment</button>
        {msg && <p role="status" className={msg.ok ? "msg ok" : "msg err"}>{msg.text}</p>}
      </form>

      <ul className="comments">
        {data.comments.map((c) => (
          <li key={c.id}>
            <strong>{c.name}</strong>
            <time>{new Date(c.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
            <p>{c.text}</p>
          </li>
        ))}
        {data.comments.length === 0 && <li className="empty">No comments yet. Be the first!</li>}
      </ul>
    </section>
  );
}
