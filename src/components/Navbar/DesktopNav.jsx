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
