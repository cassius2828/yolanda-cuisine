
import "./HeroImg.css";
import heroImg from "../../assets/images/people/gma_hero_img.jpeg";

// eslint-disable-next-line react/prop-types
export const HeroImg = ({ burger }) => {
  //   const [hoverHero, setHoverHero] = useState(false);

  return (
    <>
      <div className={burger ? "hero-img-container hero-leave " : "hero-img-container "}>
        {/* {hoverHero && <div id='hero-quote'>
            <p>samole quote or text here</p>
            <span>- name here</span>
            </div>} */}

        <img style={{ objectFit: "cover" }} src={heroImg} alt="" />
        <div className="hero-transition-cover">
          <p>samole quote or text here</p>
          <span>- name here</span>
        </div>
      </div>
    </>
  );
};
