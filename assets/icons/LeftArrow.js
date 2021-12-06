import React from "react";
import Svg, { Path } from "react-native-svg";

const LeftArrow = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2.75021C6.892 2.75021 2.75 6.89121 2.75 12.0002C2.75 17.1082 6.892 21.2502 12 21.2502C17.108 21.2502 21.25 17.1082 21.25 12.0002C21.25 6.89121 17.108 2.75021 12 2.75021Z"
        fill="#3AC8B7"
        stroke="#3AC8B7"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4424 8.52902L9.95638 12L13.4424 15.471"
        fill="#3AC8B7"
      />
      <Path
        d="M13.4424 8.52902L9.95638 12L13.4424 15.471"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default LeftArrow;
