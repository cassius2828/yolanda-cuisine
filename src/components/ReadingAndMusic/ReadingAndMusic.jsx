/* eslint-disable react/prop-types */
import "./ReadingAndMusic.css";
import { DescriptiveIcon, TitleUnderline } from "../Reusables/TitleUnderline";
import { FlipCard } from "../FlipCards/FlipCard";
import { faBook, faMusic } from "@fortawesome/free-solid-svg-icons";

export const ReadingAndMusic = ({
  selectedID,
  onFlipCard,
  image,
  alt,
  color,
  primaryColor,
}) => {
  return (
    <section className="" id="reading-n-music">
      <svg id="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,261.3C672,277,768,267,864,229.3C960,192,1056,128,1152,133.3C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="hs-icon-container">
        <DescriptiveIcon color="#fff" iconName={faMusic} />
        <DescriptiveIcon color="#fff" iconName={faBook} />
      </div>
      <h2 style={{ color: "#fff" }} className=" mb4 section-title">
        Reading and Music Room
      </h2>
      <TitleUnderline color="#fff" />
      <FlipCard
        primaryColor={primaryColor}
        color={color}
        expandBtnText="Join"
        id="reading-n-music"
        selectedID={selectedID}
        handleFlipCard={onFlipCard}
        image={image}
        alt={alt}
      />
    </section>
  );
};
