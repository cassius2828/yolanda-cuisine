/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */


import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const navList = [
  "Homeless Support",
  "Arts & Crafts",
  "Reading & Music",
  "Second Chance Program",
  "Back to School",
  "Toy Drive",
  "Dedications",
];

export const Navbar = ({ burger, onToggleMenu }) => {
  return (
    <div className="navbar">
      <DesktopNav navList={navList} />
      <MobileNav
        burger={burger}
        handleToggleMenu={onToggleMenu}
        navList={navList}
      />
    </div>
  );
};


/*
List Item Design
- border gradient
- background whitesmoke
- 70vw length
- rounded
- circlular arrow button on the right
- dark pink or black for text color
- animation on arrow hover??
Twilio menu example





*/

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
