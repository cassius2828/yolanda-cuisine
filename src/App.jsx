import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroImg } from "./components/HeroImg/HeroImg";
import {useState} from "react";
function App() {
    const [burger, setBurger] = useState(false);

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
