import React from 'react';
import { SvgXml } from 'react-native-svg';
import { AppIconProps } from './props';
import { getIcon } from '@assets/icons';

export const AppIcon = ({ name, color, size = '24' }: AppIconProps) => {
  const iconStringFn = getIcon(name);
  const svgXml = iconStringFn?.(color, size);

  if (!svgXml) {
    return null;
  }

  return <SvgXml xml={svgXml} width={size} height={size} />;
};
