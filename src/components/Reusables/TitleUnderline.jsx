/* eslint-disable react/prop-types */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Reusables.css'

export const TitleUnderline = ({color}) => {
  return (
    <div className='hr-container'>
      <hr style={{backgroundColor: color}} className="first-hr" />
      <hr style={{backgroundColor: color}} className="second-hr" />
    </div>
  );
};




export const DescriptiveIcon = ({iconName, color}) => {
  return (
   <FontAwesomeIcon style={{color: color}}  size='3x' icon={iconName}/>
  )
}
