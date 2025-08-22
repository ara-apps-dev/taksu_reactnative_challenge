export const arrowRight = (color?: string, size?: string) => `<svg width="${
  size ?? 20
}" height="${size ?? 20}" viewBox="0 0 20 20" fill="none">
<path d="M4.16667 10L15.8333 10" stroke="${
  color ?? '#FFFFFF'
}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99999 4.16665L15.8333 9.99999L9.99999 15.8333" stroke="${
  color ?? '#FFFFFF'
}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
