import ContactForm from "@/components/contact-form";

const Contact = () => (
  <article className="contact" data-page="contact">
    <header>
      <h2 className="h2 article-title title-text">Contact</h2>
    </header>
    <section className="mapbox" data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114756.4276590849!2d79.37672995617547!3d25.996284508913607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d7edf1179b633%3A0x12b04864e0a7107c!2sOrai%2C%20Uttar%20Pradesh%20285001!5e0!3m2!1sen!2sin!4v1702033513988!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
    </section>

    <ContactForm />
  </article>
);

export default Contact;
