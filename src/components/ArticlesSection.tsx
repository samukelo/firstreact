import image1 from "../assets/drone1.jpg";
import image2 from "../assets/drone2.jpg";
import image3 from "../assets/drone4.jpg";
import image4 from "../assets/drone6.jpg";

function ArticleSection() {
  return (
    <div className="section2">
      <div id="innerboxsection2">
        <div id="sectionheader">LATEST ARTICLES</div>
        <div className="floatingarticleline"></div>
      </div>
      <div className="card-container">
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="imgheader">
                <img src={image1} alt="" />
              </div>
              <div className="cardbody">
                <div className="floatingcardline"></div><br />
                How to automate surveillance drones
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="imgheader">
                <img src={image2} alt="" />
              </div>
              <div className="cardbody">
                <div className="floatingcardline"></div><br />
                Robotics and Artificial Intelligence
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="imgheader">
                <img src={image3} alt="" />
              </div>
              <div className="cardbody">
                <div className="floatingcardline"></div><br />
                Improving Lives through Robotic Prosthetics
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="imgheader">
                <img src={image4} alt="" />
              </div>
              <div className="cardbody">
                <div className="floatingcardline"></div><br />
                Power of Robotics in Agriculture
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArticleSection;
