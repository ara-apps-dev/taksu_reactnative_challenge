import { Colors } from '@styles/colors';
import { Instance } from 'mobx-state-tree';
import { TodoModel } from 'mobx/models/TodoModel';

export type Props = {
  todo: Instance<typeof TodoModel>;
  onDone?: () => void;
  onDelete?: () => void;
};

export const statusColors = {
  OPEN: Colors.statusOpen,
  DONE: Colors.statusDone,
  OVERDUE: Colors.statusOverdue,
};
