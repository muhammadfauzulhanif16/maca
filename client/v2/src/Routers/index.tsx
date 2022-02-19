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

export interface PageProps {
  titlePage: string;
}

export const Routers: RoutersState[] = [
  {
    element: <HomePage />,
    path: "",
  },
  {
    element: <AddPage titlePage="Add" />,
    path: "add",
  },
  {
    element: <ReadingPage titlePage="Reading" />,
    path: "reading",
  },
  {
    element: <FinishedPage titlePage="Finished" />,
    path: "finished",
  },
  {
    element: <NotFoundPage />,
    path: "*",
  },
];
