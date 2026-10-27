import { AUTHOR, VIDEO_ID } from "../config";
import Interaction from "../components/Interaction";

export default function DesignTips() {
  return (
    <article className="container article">
      <span className="badge">Design Tips</span>
      <h1>Five Small Things That Make a Design Better</h1>
      <p className="meta">By: {AUTHOR} · about 2 min</p>

      <p>When I started paying more attention to graphic design, I thought a good design needed many effects. Now I prefer to keep things simple. Here are five small habits that help me create clearer work.</p>
      <ol className="tips">
        <li><strong>Start with the message.</strong> Before choosing colors or photos, decide what people need to know.</li>
        <li><strong>Use fewer fonts.</strong> Two typefaces are usually enough. Too many styles can make a poster confusing.</li>
        <li><strong>Give your text some space.</strong> Not every corner needs an image or a decoration. White space makes important information easier to see.</li>
        <li><strong>Check your colors.</strong> Choose a simple palette and make sure the text is easy to read. A beautiful background doesn’t help if the words disappear.</li>
        <li><strong>Ask for another opinion.</strong> After looking at the same design for hours, it’s easy to miss something. A friend can notice details that you didn’t see.</li>
      </ol>
      <figure>
        <img src="/images/typography.svg" alt="A bold poster with only two typefaces and one message" />
        <figcaption>Two typefaces and one clear message are usually enough.</figcaption>
      </figure>
      <figure>
        <img src="/images/whitespace.svg" alt="A crowded layout next to a layout with white space" />
        <figcaption>The same content looks clearer when it has space to breathe.</figcaption>
      </figure>
      <figure>
        <img src="/images/palette.svg" alt="A simple four-color palette with a sample of readable text" />
        <figcaption>A simple palette keeps text easy to read.</figcaption>
      </figure>
      <p>For my projects, I use digital tools to edit photographs and organize visual ideas, but no app can replace practice. I still make mistakes, and that’s fine. The important thing is to keep learning.</p>

      <figure>
        <div className="video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
            title="Short video about small design decisions"
            allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <figcaption>Here is a short video showing how small design decisions can improve a simple visual.</figcaption>
      </figure>

      <p className="question">Which tip do you think is the most useful? Leave your answer in the comments.</p>

      <Interaction slug="design-tips" />
    </article>
  );
}
