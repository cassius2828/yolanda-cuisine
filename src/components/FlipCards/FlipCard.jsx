/* eslint-disable react/prop-types */
// import foodGiveaway1 from '../../assets/images/charity/homeless-food-distrubution.jpg'

import './FlipCard.css';


export const FlipCard = ({ image, alt, id, selectedID, handleFlipCard }) => {

  return (
    <div style={{ cursor: "pointer" }} onClick={() => handleFlipCard(id)} className={id === selectedID ? 'flip flip-card' : 'flip-card'}>
      <div className="flip-card-inner">
        <div className="front-card">
          <img  src={image} alt={alt} />
        </div>
        <div className="back-card">
          <div className="description-container">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              possimus magni corporis aspernatur vitae asperiores commodi error
              sapiente. Libero laboriosam, corrupti reprehenderit id laborum
              unde natus maxime officia rerum consectetur?
            </p>
            <hr />
            <span>Dates</span>
            <hr />
            <button>join</button>
          </div>
        </div>
      </div>
    </div>
  );
};
