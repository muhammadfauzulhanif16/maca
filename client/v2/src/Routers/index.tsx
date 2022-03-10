import { ReactNode } from "react";
import {
  HomePage,
  AddPage,
  ReadingPage,
  FinishedPage,
  NotFoundPage,
} from "../pages";

export interface RoutersState {
  element: ReactNode;
  path: string;
}

export const Routers: RoutersState[] = [
  {
    element: <HomePage />,
    path: "",
  },
  {
    element: <AddPage />,
    path: "add",
  },
  {
    element: <ReadingPage />,
    path: "reading",
  },
  {
    element: <FinishedPage />,
    path: "finished",
  },
  {
    element: <NotFoundPage />,
    path: "*",
  },
];
