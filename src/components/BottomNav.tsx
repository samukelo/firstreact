import imagefacebook from "../assets/facebook.svg";
import imagelinkedin from "../assets/linkedin.svg";
import imagepinterest from "../assets/pinterest.svg";

function BottomNav() {
  return (
    <section className="sectionlast">
      <div id="footer">
        <p className="left">
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              className="icon facebook"
            >
              <img src={imagefacebook} className="icon" alt="" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="icon twitter"
            >
              <img src={imagelinkedin} alt="" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="icon instagram"
            >
              <img src={imagepinterest} alt="" />
            </a>
          </div>
        </p>
        <p className="right">
          <div className="bottomlinks">
            <a href="">ABOUT US</a>
            <a href="">ARTICLES</a>
            <a href="">SUBSCRIBE</a>
          </div>
        </p>
        <p className="centered"></p>
      </div>
    </section>
  );
}

export default BottomNav;
