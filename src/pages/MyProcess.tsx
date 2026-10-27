import { AUTHOR } from "../config";
import Interaction from "../components/Interaction";

export default function MyProcess() {
  return (
    <article className="container article">
      <span className="badge">My Process</span>
      <h1>What People Don’t See Behind a Design</h1>
      <p className="meta">By: {AUTHOR} · about 2 min</p>

      <p>People usually see the final design: a poster, a social media post, or a photograph. What they don’t see is everything that happens before that moment. For me, designing means testing ideas, making mistakes, and trying again.</p>
      <p>I often begin with a simple question: What do I want people to feel or understand? After that, I look for references, choose a few colors, and decide which information is most important. Sometimes I like my first idea. Sometimes I realize it doesn’t work at all.</p>
      <figure>
        <img src="/images/moodboard.svg" alt="A moodboard with colors, shapes and type references" />
        <figcaption>References and a few colors help me choose a direction.</figcaption>
      </figure>
      <figure>
        <img src="/images/sketches.svg" alt="Sketches and several versions of the same layout" />
        <figcaption>A design usually changes many times before it is finished.</figcaption>
      </figure>
      <p>One of the hardest parts is knowing when to stop. I can spend a lot of time moving a title a little to the left or changing a font. Small details matter, but a design also needs to be clear. If people can’t understand the message, the decoration won’t help.</p>
      <p>I’ve learned that good design isn’t only about using Photoshop or having an expensive computer. It’s also about paying attention, listening to feedback, and being patient. Every new project teaches me something different.</p>
      <p>So, the next time you see a poster you like, think about the decisions behind it. There is probably more work there than you imagine.</p>
      <figure>
        <img src="/images/feedback.svg" alt="A design on screen with two friends' feedback notes" />
        <figcaption>Feedback from other people helps me see what I missed.</figcaption>
      </figure>
      <p className="question">What part of the design process would you like to try?</p>

      <Interaction slug="my-process" />
    </article>
  );
}
