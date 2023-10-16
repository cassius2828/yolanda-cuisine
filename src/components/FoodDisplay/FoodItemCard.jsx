/* eslint-disable react/prop-types */

import { DateHrBracket } from "../Reusables/DateHrBracket";
const baseDescription = 'This is a wonderful and deeply detailed description that will make your customers slap their momma just to get a piece of this fine cuisine.'
export const FoodItemCard = ({
  itemImg,
  itemAlt,
  dishName,
  itemDescription

}) => {
  return (
    <div className="food-item-card-container">
      <img className="mb3" src={itemImg} alt={itemAlt} />
      <DateHrBracket color='light'>
        <h3>{dishName}</h3>
      </DateHrBracket>
      <p>{baseDescription}</p>
      <div className="order-btn-container">
          <a href="" className="order-btn">
            Order<div className="order-arrow"></div>
          </a>
          
      </div>
    </div>
  );
};
