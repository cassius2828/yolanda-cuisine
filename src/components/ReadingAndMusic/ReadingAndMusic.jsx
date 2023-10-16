/* eslint-disable react/prop-types */
import { faBook, faMusic } from "@fortawesome/free-solid-svg-icons";
import { TitleUnderline } from "../Reusables/TitleUnderline";
import { DescriptiveIcon } from "../Reusables/DescriptiveIcon";
import { DateHrBracket } from "../Reusables/DateHrBracket";

// image imports
import readingRoom from "../../assets/images/misc/reading-room.png";
import musicRoom from "../../assets/images/misc/music-room.jpeg";
import sundayDinner from "../../assets/images/misc/sunday-dinner.png";
/*

 color="light"
          primaryColor={primaryColor}
          selectedID={selectedID}
          image={musicRoom}
          alt="Reading and music room"
*/

export const ReadingAndMusic = ({ selectedID, image, alt }) => {
  return (
    <section className="" id="reading-n-music">
      <svg id="wave3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,218.7C384,235,480,245,576,213.3C672,181,768,107,864,101.3C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/* change this class name, add a base class and then a descriptive class */}
      <div className="hs-icon-container">
        <DescriptiveIcon iconName={faBook} />
        <DescriptiveIcon iconName={faMusic} />
      </div>
      <h2 className=" mb4 section-title section-title--gradient">
        Reading & Music
      </h2>
      <TitleUnderline />
      <ReadingAndMusicSection
        descriptiveText="This is a descriptive section of text for you to describe to your customers everything about the reading room that you want to let them know about. 
        Here is more filler text.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non deserunt molestiae dicta inventore nihil corporis sit porro dolore vero nobis at molestias, laudantium ipsam illo qui est, magni blanditiis minima.
        "
        className="reading-section"
        sectionImage={readingRoom}
        sectionAlt="Reading room"
        sectionTitle="Reading"
      />
      <ReadingAndMusicSection
        descriptiveText="This is a descriptive section of text for you to describe to your customers everything about the music room that you want to let them know about
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non deserunt molestiae dicta inventore nihil corporis sit porro dolore vero nobis at molestias, laudantium ipsam illo qui est, magni blanditiis minima.
        . Here is more tfiller text.
        "
        className="music-section"
        sectionImage={musicRoom}
        sectionAlt="Music room"
        sectionTitle="Music"
      />

      <ReadingAndMusicSection
        descriptiveText="This is a descriptive section of text for you to describe to your customers everything about the gospel-dinner that you want to let them know about. Here is more filler text 
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non deserunt molestiae dicta inventore nihil corporis sit porro dolore vero nobis at molestias, laudantium ipsam illo qui est, magni blanditiis minima.
        "
        className="gospel-dinner-section"
        sectionImage={sundayDinner}
        sectionAlt="Gospel Dinner in action"
        sectionTitle="Sunday Gospel Dinner"
      />
      <svg id="wave4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,32L48,74.7C96,117,192,203,288,229.3C384,256,480,224,576,186.7C672,149,768,107,864,90.7C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export const ReadingAndMusicSection = ({
  descriptiveText,
  sectionImage,
  sectionAlt,
  sectionTitle,
}) => {
  return (
    <div className="reading-n-music-sections">
      <DateHrBracket color="light">{sectionTitle}</DateHrBracket>
      <div className="section-img-container">
        <img src={sectionImage} alt={sectionAlt} />
      </div>
      <p className="reading-n-music-section-details mb5">{descriptiveText}</p>
    </div>
  );
};

/*
3. Reading + Music Room
- Mon -- Thurs reading
- Fri, Sat Music
- Sunday Gospel Sunday Dinner
 */
