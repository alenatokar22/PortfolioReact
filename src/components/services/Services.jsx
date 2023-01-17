import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing custom pages and screens.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Harmonization of graphic elements with corporate identity.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Drawing buttons, blocks, sliders, switches.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Formation of a manual for creating a software product.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Layout.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Conducting user surveys.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I create a user interface, add markup and styles for the site
                pages.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I deploy the application: I upload it to the server so that the
                application is available on the network and users can use it.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I am developing a library of interface components: separate
                blocks that other developers use in their projects.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
