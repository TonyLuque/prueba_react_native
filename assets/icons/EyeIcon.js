import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function EyeIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={20}
      fill="none"
      viewBox="0 0 14 10"
    >
      <Path
        stroke="#393E46"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 9c2.2 0 6-3.8 6-4 0-.2-3.8-4-6-4S1 4.9 1 5c0 .1 3.8 4 6 4z"
      ></Path>
      <Path
        stroke="#393E46"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 6a2 2 0 100-4 2 2 0 000 4z"
      ></Path>
    </Svg>
  )
}

export default EyeIcon
