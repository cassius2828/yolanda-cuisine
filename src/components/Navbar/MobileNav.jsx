/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { MobileNavListItem } from "./MobileListItem";

export const MobileNav = ({ navList, burger, handleToggleMenu }) => {
  //   const [burger, setBurger] = useState(false);

  return (
    <>
      {" "}
      <div className="mobile-nav">
        <h1>Yolanda's Cuisine & Tasty Treats</h1>
        <div
          onClick={handleToggleMenu}
          className={
            burger ? "hamburger-container active" : "hamburger-container"
          }
        ></div>
      </div>
      <div className={burger ? "slide-menu slide-in" : "slide-menu"}>
        <ul>
          {/*eslint-disable-next-line react/prop-types*/}
          {navList.map((i, index) => {
            return <MobileNavListItem key={i} listText={i} />;
          })}
        </ul>
      </div>
    </>
  );
};
