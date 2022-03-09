import {
  Book,
  BookAdd,
  BookOpen,
  Home,
} from "@emotion-icons/fluentui-system-regular";
import { ReactNode } from "react";

export interface PageNavsState {
  icon?: ReactNode;
  text?: string;
}

export const PageNavs: PageNavsState[] = [
  {
    icon: <Home width={24} />,
    text: "Home",
  },
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
