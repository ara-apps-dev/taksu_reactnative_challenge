import { add } from './add';
import { arrowRight } from './arrow-right';
import { trash } from './trash';

const icons = {
  add,
  arrowRight,
  trash,
};

export type IconName = keyof typeof icons;
export const getIcon = (name: IconName) => icons[name];
export default icons;
