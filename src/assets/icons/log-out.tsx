import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const LogOutIcon: React.FC<IconProps> = ({ width = 32, height = 32, color = '#1C274C' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <Path
        d="M9.32,22.73,3.61,17.44a2,2,0,0,1,0-2.85L9.32,9.27l1.36,1.46L5,16l5.71,5.24Z"
        fill={color}
      />
      <Rect x="5" y="15" width="15" height="2" fill={color} />
      <Path
        d="M26,29H16a3,3,0,0,1-3-3V19h2v7a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H16a1,1,0,0,0-1,1v6.93H13V6a3,3,0,0,1,3-3H26a3,3,0,0,1,3,3V26A3,3,0,0,1,26,29Z"
        fill={color}
      />
    </Svg>
  );
};
