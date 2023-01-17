import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alona Tokar</h1>
        <h5 className="text-ligth">React Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <div>
          <a href="#contact" className="scroll__down">
            Scroll down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
