import S from "./footer.module.scss";
import facebookLogo from "../../assets/facebook-logo.png";
import twitterLogo from "../../assets/twitter-logo.png";
import youtubeLogo from "../../assets/youtube-logo.png";
import linkedinLogo from "../../assets/linkedin-logo.png";
import instagramLogo from "../../assets/instagram-logo.png";

export default function footer() {
  return (
    <footer>
      <section className={S.contactInfo}>
        <div>
          <p>4002-8922</p>
        </div>
        <nav>
          <img src={facebookLogo} alt="" />
          <img src={twitterLogo} alt="" />
          <img src={youtubeLogo} alt="" />
          <img src={linkedinLogo} alt="" />
          <img src={instagramLogo} alt="" />
        </nav>
      </section>
      <section className={S.disclaimer}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
