/* eslint-disable react/prop-types */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { FlipCard } from "../FlipCards/FlipCard";
import { TitleUnderline } from "../Reusables/TitleUnderline";
import { DescriptiveIcon } from "../Reusables/DescriptiveIcon";
import {faBowlFood, faShirt} from "@fortawesome/free-solid-svg-icons";

export const HomelessSupport = ({ image, alt, onFlipCard, selectedID, primaryColor, secondaryColor, color }) => {
  return (
    <section className="" id="homeless-support">
      <svg id="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L60,208C120,192,240,160,360,176C480,192,600,256,720,245.3C840,235,960,149,1080,117.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="hs-icon-container">
        <DescriptiveIcon iconName={faBowlFood} />
        <DescriptiveIcon iconName={faShirt} />
      </div>
      <h2 className=" mb4 section-title section-title--gradient">
        Meal Center & Clothing Giveaways
      </h2>
      <TitleUnderline />
      <FlipCard
        primaryColor={primaryColor}
        color={color}
        expandBtnText="Join"
        id="homeless-support"
        selectedID={selectedID}
        handleFlipCard={onFlipCard}
        image={image}
        alt={alt}
      />
    </section>
  );
};
