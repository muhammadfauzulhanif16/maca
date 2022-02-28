import { HomePage } from "../pages/Home";
import { AddPage } from "../pages/Add";
import { ReadingPage } from "../pages/Reading";
import { FinishedPage } from "../pages/Finished";
import { NotFoundPage } from "../pages/NotFound";

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
