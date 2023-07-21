import Title from "./Title";
import aboutImg from "../images/about.png";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} alt="about" className="about-photo" />
        </div>
        <article className="about-info">
          <h3>Explore The Difference</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            laboriosam illo, ex eveniet consequuntur, aliquid harum dignissimos
            quas nam, accusantium. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Cumque laboriosam illo, ex eveniet consequuntur,
            aliquid harum dignissimos quas nam, accusantium.
          </p>
          <a href="#home" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
