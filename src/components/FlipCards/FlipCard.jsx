/* eslint-disable react/prop-types */
// import foodGiveaway1 from '../../assets/images/charity/homeless-food-distrubution.jpg'

import {ExpandBtn} from '../Reusables/ExpandBtn';
import './FlipCard.css';


export const FlipCard = ({ image, alt, id, selectedID, handleFlipCard, expandBtnText, color, primaryColor }) => {

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => handleFlipCard(id)}
      className={id === selectedID ? "flip flip-card" : "flip-card "}
    >
      <div className="flip-card-inner">
        <div className="front-card">
          <img src={image} alt={alt} />
        </div>
        <div style={{border: color === 'light' ? `solid ${primaryColor} 1.5px` : 'solid #fff 1.5px'}} className="back-card">
          <div className="description-container">
            <p style={{ color: color === "light" ? "#000" : "#fff" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              possimus magni corporis aspernatur vitae asperiores commodi error
              sapiente. Libero laboriosam, corrupti reprehenderit id laborum
              unde natus maxime officia rerum consectetur?
            </p>
            <hr
              style={{
                border: "none",
                backgroundColor: color === "light" ? "#000" : "#fff",
              }}
            />
            <span
              style={{ color: color === "light" ? "#000" : "#fff" }}
              className="dates"
            >
              Dates
            </span>
            <hr
              style={{
                border: "none",
                backgroundColor: color === "light" ? "#000" : "#fff",
              }}
            />

            <ExpandBtn primaryColor={primaryColor} color={color} text={expandBtnText} />
          </div>
        </div>
      </div>
    </div>
  );
};
