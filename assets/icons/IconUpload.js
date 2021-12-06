import React from "react";
import Svg, { Path } from "react-native-svg";

const IconUpload = ({ color }) => {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.70588 5.20573H9.87941V15.2961C9.87941 15.4273 9.98529 15.5347 10.1147 15.5347H11.8794C12.0088 15.5347 12.1147 15.4273 12.1147 15.2961V5.20573H14.2941C14.4912 5.20573 14.6 4.97606 14.4794 4.82096L11.1853 0.591552C11.1633 0.563033 11.1352 0.539968 11.1031 0.524106C11.071 0.508244 11.0357 0.5 11 0.5C10.9643 0.5 10.929 0.508244 10.8969 0.524106C10.8648 0.539968 10.8367 0.563033 10.8147 0.591552L7.52059 4.81798C7.4 4.97606 7.50882 5.20573 7.70588 5.20573ZM21.7647 14.4013H20C19.8706 14.4013 19.7647 14.5086 19.7647 14.6399V19.2332H2.23529V14.6399C2.23529 14.5086 2.12941 14.4013 2 14.4013H0.235294C0.105882 14.4013 0 14.5086 0 14.6399V20.5455C0 21.0735 0.420588 21.5 0.941176 21.5H21.0588C21.5794 21.5 22 21.0735 22 20.5455V14.6399C22 14.5086 21.8941 14.4013 21.7647 14.4013Z"
        fill={color ? color : "#3AC8B7"}
      />
    </Svg>
  );
};

export default IconUpload;