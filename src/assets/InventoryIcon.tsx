import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconProps} from '../types/IconProps';

const InventoryIcon: React.FC<IconProps> = ({
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
        d="M6 12H4.6c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437C3 12.76 3 13.04 3 13.6v2.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437C3.76 18 4.04 18 4.6 18H6m12-6h1.4c.56 0 .84 0 1.054.109a1 1 0 01.437.437C21 12.76 21 13.04 21 13.6v2.8c0 .56 0 .84-.109 1.054a1 1 0 01-.437.437C20.24 18 19.96 18 19.4 18H18M15 6a3 3 0 10-6 0m1 6h4m-3.2 9h2.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C18 18.72 18 17.88 18 16.2v-5.4c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C15.72 6 14.88 6 13.2 6h-2.4c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C6 8.28 6 9.12 6 10.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C8.28 21 9.12 21 10.8 21z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {InventoryIcon};
