/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DescriptiveIcon = ({ iconName, color, inverted }) => {
  return (
    <div className="descriptive-icon">
      <FontAwesomeIcon
        style={{
          color: color ? color : "",
          transform: inverted === true && "scaleX(-1)",
        }}
        size="3x"
        icon={iconName}
      />
    </div>
  );
};
