import {
  HomePage,
  AddPage,
  ReadingPage,
  FinishedPage,
  NotFoundPage,
} from "../pages";

interface RoutersState {
  element: any;
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
