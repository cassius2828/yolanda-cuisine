/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import "./Navbar.css";

const navList = [
  "Homeless Support",
  "Arts & Crafts",
  "Reading & Music",
  "Second Chance Program",
  "Back to School",
  "Toy Drive",
  "Dedications",
];

export const Navbar = ({burger, onToggleMenu}) => {
  

  return (
    <div className="navbar">
      <DesktopNav navList={navList} />
      <MobileNav burger={burger} handleToggleMenu={onToggleMenu} navList={navList} />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const DesktopNav = ({ navList }) => {
  return (
    <div className="desktop-nav">
      {" "}
      <h1>Yolanda's Cuisine & Tasty Treats</h1>
      <ul>
        {/*eslint-disable-next-line react/prop-types*/}
        {navList.map((i, index) => {
          return (
            <a key={index} href={i.split("").join("").toLowerCase()}>
              <li id={i.split("").join("").toLowerCase()}>{i}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const MobileNav = ({navList, burger, handleToggleMenu}) => {
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
       <div className={burger ? 'slide-menu slide-in' : 'slide-menu'}>
        <ul>
          {/*eslint-disable-next-line react/prop-types*/}
          {navList.map((i, index) => {
            return (
              <a key={index} href={i.split("").join("").toLowerCase()}>
                <li id={i.split("").join("").toLowerCase()}>{i}</li>
              </a>
            );
          })}
        </ul>
      </div> 
     
    </>
  );
};

/*
1. Free food + clothing for the homeless
2. Arts + Crafts room
3. Reading + Music Room
- Mon -- Thurs reading
- Fri, Sat Music
- Sunday Gospel Sunday Dinner
4. Second Chance Program
5. Food + Clothing Donations for back to school

6. November Toy Drive

7. In memory of King and Bertha Brown
8. Dedications: Thaddius Flectony, Nate "Puca" Craig, DaJanae, Danayah, Donte Jr, Texacta
9. Special thank yous
*/
