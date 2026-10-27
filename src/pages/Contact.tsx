import { AUTHOR } from "../config";
import { CameraIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PortfolioIcon } from "../components/Icons";

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
        <div>
          <dt><PortfolioIcon />Portfolio</dt>
          <dd><a href="https://www.behance.net/davidmalca1" target="_blank" rel="noopener noreferrer">My work on Behance</a></dd>
        </div>
        <div>
          <dt><CameraIcon />Photo album</dt>
          <dd><a href="https://www.pexels.com/es-es/@david-malca-2163526568/gallery/" target="_blank" rel="noopener noreferrer">My photos on Pexels</a></dd>
        </div>
      </dl>

      <p>My portfolio is not fully up to date yet, but you can see some of my designs on Behance and my photographs in my Pexels album.</p>

      <p className="question">Let’s make something great together.</p>
    </section>
  );
}
