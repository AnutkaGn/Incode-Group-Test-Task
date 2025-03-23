import React from 'react';
import Svg, { Path } from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const AnalyticsIcon: React.FC<IconProps> = ({ width = 25, height = 25, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 76 76" fill="none">
      <Path
        d="M74 0H56c-1.1 0-2 .9-2 2v33.8H40V22c0-1.1-.9-2-2-2H20c-1.1 0-2 .9-2 2v30.9H2c-1.1 0-2 .9-2 2V74c0 1.1.9 2 2 2h72c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM18 72H4V56.9h14V72zM36 72H22V24h14V72zM54 72H40V39.8h14V72zM72 72H58V4h14V72z"
        fill={color}
      />
    </Svg>
  );
};
