import { BookAdd, Library, Home } from "@emotion-icons/fluentui-system-regular";
import { ReactNode } from "react";
import { Settings, SignOut } from "@emotion-icons/fluentui-system-regular";

export interface PageNavsState {
  icon: ReactNode;
  text: string;
}

export const PageNavs: PageNavsState[] = [
  {
    icon: <Home width={24} />,
    text: "Dashboard",
  },
  {
    icon: <BookAdd width={24} />,
    text: "Add",
  },
  {
    icon: <Library width={24} />,
    text: "Shelf",
  },
  {
    icon: <Settings width={24} />,
    text: "Settings",
  },
  {
    icon: <SignOut width={24} />,
    text: "Sign Out",
  },
];
