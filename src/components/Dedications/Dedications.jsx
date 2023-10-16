/* eslint-disable react/prop-types */


// exmaple imports
import arethaFranklin from "../../assets/images/people/aretha-franklin-1967.jpeg";
import { TitleUnderline } from "../Reusables/TitleUnderline";

export const Dedications = () => {
  return (
    <section id="dedications">
      {/* <IndividualDedication
        image={arethaFranklin}
        alt="Aretha Franklin"
        name="Aretha Franklin"
        description="This is where added text will go about this dedication if you wanted to do that"
      /> */}
      <h2 className=" mb4 section-title section-title--light">Dedications</h2>
      <TitleUnderline color="#fff" />
      <IndividualDedication
        image="https://img.freepik.com/premium-photo/happy-african-senior-man-home_249974-14195.jpg"
        alt="Gregory Jones"
        name="Gregory Jones"
        description="This is where added text will go about this dedication if you wanted to do that"
      />
    </section>
  );
};

export const IndividualDedication = ({ image, alt, name, description }) => {
  return (
    <div className="dedication-container">
      <img
        className="bw-dedication"
        src={image}
        alt={"Black and white version of " + alt}
      />  
      <div className="color-container">
        <img className="color-dedication" src={image} alt={alt} />
      <span>{name}</span>
      </div>
    </div>
  );
};
