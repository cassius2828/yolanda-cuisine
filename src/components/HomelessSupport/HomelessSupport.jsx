/* eslint-disable react/prop-types */
import { FlipCard } from "../FlipCards/FlipCard";
import './HomelessSupport.css';

export const HomelessSupport = ({image, alt, onFlipCard, selectedID }) => {
  return (
    <section className="mt5" id="homeless-support">
      <h2 className="mb3 section-title">
        Meal Center & Clothing Giveaways
      </h2>
      <FlipCard id='homeless-support' selectedID={selectedID} handleFlipCard={onFlipCard} image={image} alt={alt} />
    </section>
  );
};
