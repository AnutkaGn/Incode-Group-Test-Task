import React from 'react';
import Svg, { Path } from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const SunIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#000' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <Path
        d="M11 3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V3zm0 16a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm1-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-9-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2H3zm16 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2h-2zm-.707-8.707a1 1 0 0 1 1.414 1.414l-1.581 1.581a1 1 0 0 1-1.414-1.414l1.58-1.581zM5.707 19.707a1 1 0 1 1-1.414-1.414l1.581-1.581a1 1 0 1 1 1.414 1.414l-1.58 1.581zm-1.414-14a1 1 0 0 1 1.414-1.414l1.581 1.581a1 1 0 0 1-1.414 1.414l-1.581-1.58zm15.414 12.586a1 1 0 0 1-1.414 1.414l-1.581-1.581a1 1 0 0 1 1.414-1.414l1.581 1.58z"
        fill={color}
        fillRule="nonzero"
      />
    </Svg>
  );
};
