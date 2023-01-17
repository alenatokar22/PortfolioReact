import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/alona-tokar-817068194/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/alenatokar22?tab=repositories"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a href="@ITAU007" target="_blank">
        <FaTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;
