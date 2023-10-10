import "./HeroImg.css";
import heroImg from "../../assets/images/people/gma_hero_img.jpeg";
import heroImg2 from "../../assets/images/people/gma_hero_img.png";
import backgroundPink from "../../assets/images/misc/pink-background.jpeg";

// eslint-disable-next-line react/prop-types
export const HeroImg = ({ burger }) => {
  //   const [hoverHero, setHoverHero] = useState(false);

  return (
    <>
      <div className="hero-img-container ">
        {/* <img
          style={{ position: "absolute", zIndex: "0" }}
          src={backgroundPink}
          alt=""
        /> */}
        <div className="circle-container">
          <img id="hero-img" src={heroImg2} alt="" />
        </div>
        <div className="mission-statement-container">
          <div className="mission-statement">
            <h1>Mission Statement</h1>
            <span className="mission-statement-details">
              details of the mission statement, a quick overviedw of what your
              company is all about
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
