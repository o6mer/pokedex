import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconProps} from '../types/IconProps';

const SearchIcon: React.FC<IconProps> = ({
  width = 36,
  height = 36,
  fill = 'none',
  stroke = '#000',
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      {...props}>
      <Path
        d="M15.796 15.811L21 21m-3-10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {SearchIcon};
