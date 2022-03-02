import {
  HomePage,
  AddPage,
  ReadingPage,
  FinishedPage,
  NotFoundPage,
} from "../pages";

export const Routers = [
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
