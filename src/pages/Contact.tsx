import { AUTHOR } from "../config";

export default function Contact() {
  return (
    <section className="container article">
      <span className="badge">Contact</span>
      <h1>Let’s Connect!</h1>
      <p className="meta">By: {AUTHOR}</p>

      <p>Thank you for visiting Inside a Designer’s World. I’m always happy to talk with people who like design, photography and creative work.</p>
      <p>If you have a question, an idea for a project, or you just want to share your thoughts about my posts, feel free to write to me. I’d love to hear from you!</p>

      <dl className="contact">
        <div>
          <dt>Email</dt>
          <dd><a href="mailto:dmalca24@gmail.com">dmalca24@gmail.com</a></dd>
        </div>
        <div>
          <dt>Number</dt>
          <dd><a href="tel:+51956827528">+51 956 827 528</a></dd>
        </div>
      </dl>

      <p className="question">Let’s make something great together.</p>
    </section>
  );
}
