import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

const Home = () => (
  <article className="about active" data-page="about">
    <header>
      <h2 className="h2 article-title title-text">About me</h2>
    </header>

    <section className="about-text">
      <p>
         i&apos;am web developer and UI/UX Designer based in kanpur,
        Uttar Pradesh. With a focus on web development and print media, he excels at
        transforming complex challenges into simple, beautiful, and intuitive
        designs.
      </p>

      <p>
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to your product and make sure that is eye-catching and easy to
        use. My aim is to bring across your message and identity in the most
        creative way. I created web design for many famous brand companies.
      </p>
    </section>

    <Services />

    <section className="testimonials">
      <Testimonials />
    </section>
  </article>
);

export default Home;
