import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroImg } from "./components/HeroImg/HeroImg";

// homeless support imports
import { HomelessSupport } from "./components/HomelessSupport/HomelessSupport";

import foodGiveaway1 from "./assets/images/charity/homeless-food-distribution.jpg";

import { useState } from "react";
import {ReadingAndMusic} from "./components/ReadingAndMusic/ReadingAndMusic";
function App() {
  const [burger, setBurger] = useState(false);
  const [selectedID, setSelectedID] = useState(null);
  const primaryColor = "#ff166a";
  const secondaryColor = "#fc74a5";

  const flipCard = (id) => {
    setSelectedID(id !== selectedID ? id : null);
    console.log('this is the component id ' + id);
    console.log("this is the state id " + selectedID);
  };

  const toggleMenu = () => {
    setBurger((prev) => !prev);
  };

  return (
    <div className="App">
      <ErrorBoundary
        fallback={
          <div className="errorModal">
            <h1>Error Occured</h1>
          </div>
        }
      >
        <Navbar burger={burger} onToggleMenu={toggleMenu} />
        <HeroImg burger={burger} setBurger={setBurger} />
        <HomelessSupport
        color='light'
        primaryColor={primaryColor}
          selectedID={selectedID}
          onFlipCard={flipCard}
          image={foodGiveaway1}
          alt="Meal center giveaway in action"
        />
        <ReadingAndMusic
        color='dark'
        primaryColor={primaryColor}
          selectedID={selectedID}
          onFlipCard={flipCard}
          image="https://st.hzcdn.com/simgs/pictures/kids-rooms/music-room-shop-skout-img~ed014cf70e337370_4-3443-1-b869104.jpg"
          alt="Reading and music room"
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;

/*
OVERALL VISION: 
Title: Yolanda's Cuisine and Tasty Treats
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

THINGS TO IMPLEMENT
1. Twilio text to order, send data from input fields to res.body and have it send as a SMS / Email
2. Ability to enter card information for donations 
2b. Initialize a location to hold funds for donations
3. Ability to leave public reviews (reviewed by admin before it is active on the site. POST )
3b. Database for storing reviews


STYLE OF SITE:
1. SPA with anchors for navigating to specific spots
2. A couple paths
- leave a review
- order
- donation

THINGS TO GET IN ORDER
1. Domain name
2. Price for twilio message API
3. Eventually, more professional photos


*/
