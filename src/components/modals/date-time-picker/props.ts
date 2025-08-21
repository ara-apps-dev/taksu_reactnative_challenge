export type Props = {
  date: Date;
  onCancel: () => void;
  onConfirm: (date: Date) => void;
};
