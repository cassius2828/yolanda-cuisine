import {MobileListBtn} from "./MobileListBtn";



export const MobileNavListItem = ({ listText }) => {
  return (
    <div className="list-item-container">
      {" "}
      <a href="">
        <li>
          <MobileListBtn text={listText} />
        </li>
      </a>
    </div>
  );
};
