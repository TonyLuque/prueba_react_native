import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
function EyeCloseIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={24}
      fill="none"
      viewBox="0 0 15 13"
    >
      <Path
        stroke="#393E46"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10c2.2 0 6-3.8 6-4 0-.2-3.8-4-6-4S2 5.9 2 6c0 .1 3.8 4 6 4z"
      ></Path>
      <Path
        stroke="#393E46"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7a2 2 0 100-4 2 2 0 000 4z"
      ></Path>
      <Path
        fill="#393E46"
        stroke="#fff"
        strokeWidth="0.7"
        d="M0.51 1.863H2.202V17.936H0.51z"
        transform="rotate(-53.072 .51 1.863)"
      ></Path>
    </Svg>
  )
}

export default EyeCloseIcon
