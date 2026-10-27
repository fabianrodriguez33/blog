import { Link } from "react-router-dom";
import { AUTHOR } from "../config";

export default function Home() {
  return (
    <>
      <section className="hero container">
        <p className="eyebrow">Inside a Designer’s World</p>
        <h1>It looks simple. It never starts that way.</h1>
        <p className="lead">Ideas, revisions and everything behind a design.</p>
        <Link to="/my-process" className="btn">READ MY STORY</Link>
      </section>

      <section className="container welcome">
        <p>
          Hi, I’m {AUTHOR}. Welcome to Inside a Designer’s World, a place to talk about the work that happens before a design is finished. Here, I share small lessons from making posters, editing photos, and creating content for digital platforms. Sometimes an idea works on the first try. Other times, I change the colors or move the text ten times. That’s normal, and that’s what makes the process interesting. If you like design, or you’re curious about how it works, you’re in the right place. Take a look at my posts and tell me what you think!
        </p>
      </section>

      <section className="container grid">
        <article className="card">
          <img src="/images/sketches.svg" alt="Rough sketches and layout drafts on paper" />
          <span className="badge">My Process</span>
          <h2>What People Don’t See Behind a Design</h2>
          <p>Testing ideas, making mistakes and trying again.</p>
          <Link to="/my-process" className="link">Read the story →</Link>
        </article>
        <article className="card">
          <img src="/images/typography.svg" alt="Bold poster typography on a dark background" />
          <span className="badge">Design Tips</span>
          <h2>Five Small Things That Make a Design Better</h2>
          <p>Five simple habits for clearer work.</p>
          <Link to="/design-tips" className="link">See the tips →</Link>
        </article>
      </section>

      <section className="container">
        <figure>
          <img src="/images/desk.svg" alt="A designer's desk with a screen, sketches and pencils" />
          <figcaption>My workspace: where every design starts, changes and starts again.</figcaption>
        </figure>
      </section>
    </>
  );
}
