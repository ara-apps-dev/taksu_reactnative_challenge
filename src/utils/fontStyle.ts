import { TextStyle } from 'react-native';
import { fonts } from '@assets/fonts/fonts';
import { Colors } from '@styles/colors';

type FontVariant = keyof typeof fonts;
type FontWeight = keyof (typeof fonts)[FontVariant];

interface FontOptions {
  variant?: FontVariant;
  weight?: FontWeight;
  size?: number;
  lineHeight?: number;
  color?: string;
}

export const fontStyle = ({
  variant = 'regular',
  weight = 'regular' as keyof (typeof fonts)['regular'],
  size = 14,
  lineHeight,
  color = Colors.textPrimary,
}: FontOptions): TextStyle => {
  const selectedVariant = fonts[variant] as (typeof fonts)['regular'];
  return {
    fontFamily: selectedVariant[weight],
    fontSize: size,
    lineHeight: lineHeight ?? size * 1.3,
    color,
  };
};
