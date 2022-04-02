import {
  Book,
  BookAdd,
  BookOpen,
} from "@emotion-icons/fluentui-system-regular";
import { ReactNode } from "react";

export interface BookNavsState {
  icon: ReactNode;
  text: string;
}

export const BookNavs: BookNavsState[] = [
  {
    icon: <BookAdd width={24} />,
    text: "Add",
  },
  {
    icon: <BookOpen width={24} />,
    text: "Reading",
  },
  {
    icon: <Book width={24} />,
    text: "Finished",
  },
];
