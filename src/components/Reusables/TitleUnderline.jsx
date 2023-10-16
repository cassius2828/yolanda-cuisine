/* eslint-disable react/prop-types */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const TitleUnderline = ({color}) => {
  return (
    <div className='hr-container'>
      <hr 
      style={{backgroundColor: color}}
       className="first-hr" />
      <hr 
      style={{backgroundColor: color}}
       className="second-hr" />
    </div>
  );
};





