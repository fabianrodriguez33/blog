import { AUTHOR } from "../config";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "../components/Icons";

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
          <dt><MailIcon />Email</dt>
          <dd><a href="mailto:dmalca24@gmail.com">dmalca24@gmail.com</a></dd>
        </div>
        <div>
          <dt><PhoneIcon />Number</dt>
          <dd><a href="tel:+51956827528">+51 956 827 528</a></dd>
        </div>
        <div>
          <dt><InstagramIcon />Instagram</dt>
          <dd><a href="https://www.instagram.com/davicho_malca/" target="_blank" rel="noopener noreferrer">@davicho_malca</a></dd>
        </div>
        <div>
          <dt><FacebookIcon />Facebook</dt>
          <dd><a href="https://web.facebook.com/david.malca.7927/?locale=es_LA" target="_blank" rel="noopener noreferrer">David Malca</a></dd>
        </div>
      </dl>

      <p className="question">Let’s make something great together.</p>
    </section>
  );
}
