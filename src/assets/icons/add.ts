export const add = (color?: string, size?: string) => `<svg width="${
  size ?? 37
}" height="${size ?? 37}" viewBox="0 0 37 37" fill="none">
<path d="M18.5 7.70834V29.2917" stroke="${
  color ?? '#36393F'
}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.70831 18.5H29.2916" stroke="${
  color ?? '#36393F'
}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
