import { FC, ReactNode, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import {
  AddPage,
  FinishedPage,
  HomePage,
  NotFoundPage,
  ReadingPage,
} from "./pages";
import { readAllBooksAct } from "./store/actions/book";
import { Loading, Message } from "./components";

interface RoutersState {
  element: ReactNode;
  path: string;
}

const App: FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch(),
    { books, isLoading, success, error } = useSelector(
      ({ book }: RootState) => book
    ),
    reading = books?.filter(({ is_completed }: any) => {
      return is_completed === false;
    }),
    finished = books?.filter(({ is_completed }: any) => {
      return is_completed === true;
    }),
    Routers: RoutersState[] = [
      {
        element: (
          <HomePage books={books} reading={reading} finished={finished} />
        ),
        path: "",
      },
      {
        element: <AddPage titlePage="Add" books={books} />,
        path: "add",
      },
      {
        element: (
          <ReadingPage
            titlePage="Reading"
            books={reading}
            isLoading={isLoading}
          />
        ),
        path: "reading",
      },
      {
        element: (
          <FinishedPage
            titlePage="Finished"
            books={finished}
            isLoading={isLoading}
          />
        ),
        path: "finished",
      },
      {
        element: <NotFoundPage />,
        path: "*",
      },
    ];

  useEffect(() => {
    dispatch(readAllBooksAct());
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Routes>
            {Routers.map(
              ({ element, path }: RoutersState, id: number): JSX.Element => (
                <Route key={id} path={`/${path}`} element={element} />
              )
            )}
          </Routes>

          <Message success={success} error={error} />
        </>
      )}
    </>
  );
};

export default App;
