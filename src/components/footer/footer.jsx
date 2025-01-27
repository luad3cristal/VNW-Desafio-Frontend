import S from "./footer.module.scss";
import facebookLogo from "../../assets/facebook-logo.png";
import twitterLogo from "../../assets/twitter-logo.png";
import youtubeLogo from "../../assets/youtube-logo.png";
import linkedinLogo from "../../assets/linkedin-logo.png";
import instagramLogo from "../../assets/instagram-logo.png";

export default function footer() {
  return (
    <footer>
      <section className={S.contact_container}>
        <div>
          <p>4002-8922</p>
        </div>
        <nav>
          <img src={facebookLogo} alt="logo do facebook" />
          <img src={twitterLogo} alt="logo do twitter" />
          <img src={youtubeLogo} alt="logo do youtube" />
          <img src={linkedinLogo} alt="logo do linkedin" />
          <img src={instagramLogo} alt="logo do instagram" />
        </nav>
      </section>
      <section className={S.disclaimer}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
