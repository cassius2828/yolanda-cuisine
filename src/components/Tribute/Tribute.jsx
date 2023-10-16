
import heavenGates from "../../assets/images/people/heaven-gates.jpeg";
import {  faDove } from "@fortawesome/free-solid-svg-icons";
import { DescriptiveIcon } from "../Reusables/DescriptiveIcon";

export const Tribute = () => {
  return (
    <div className="tribute-container">
      <div className="tribute-container--title">
        <DescriptiveIcon color="#fff" iconName={faDove} />

        <h2 className="tribute-title">
          In Loving Memory of James & Bertha Brown
        </h2>

        <DescriptiveIcon inverted={true} iconName={faDove} color="#fff" />
      </div>
      <div className="tribute-img-container">
        <img src={heavenGates} alt="" />
      </div>
    </div>
  );
};
