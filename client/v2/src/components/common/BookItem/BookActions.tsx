export interface BookActionsState {
  icon: string;
  bgColor: string;
}

export const BookActions: BookActionsState[] = [
  {
    icon: "book",
    bgColor: "hover:bg-sky-300",
  },
  {
    icon: "edit",
    bgColor: "hover:bg-amber-300",
  },
  {
    icon: "trash",
    bgColor: "hover:bg-rose-300",
  },
];
