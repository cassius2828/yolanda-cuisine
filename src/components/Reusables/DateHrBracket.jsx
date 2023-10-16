/* eslint-disable react/prop-types */
export const DateHrBracket = ({ children, color }) => {
  return (
    <div className="date-hr-bracket mb5">
      <hr className={color === "light" ? "light-hr" : "dark-hr"} />
      <span className={color === "light" ? "light-text" : "dark-text"}>
        {children}
      </span>
      <hr className={color === "light" ? "light-hr" : "dark-hr"} />
    </div>
  );
};
