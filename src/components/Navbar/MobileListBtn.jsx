/* eslint-disable react/prop-types */


export const MobileListBtn = ({text}) => {
  return (
    <div className="mt4 mb4">
        <button className="btn">
            <span className="circle">
                <span className="arrow"></span>
            </span>
            <span className="text">{text}</span>
        </button>
    </div>
  )
}
