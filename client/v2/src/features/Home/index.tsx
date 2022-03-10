import { FC, ReactNode, useEffect } from "react";
import { Layout } from "../common/Layout";
import {
  Book,
  BookAdd,
  BookOpen,
  SpinnerIos,
} from "@emotion-icons/fluentui-system-regular";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { readAllBooksAct } from "../../store/actions/book";
import { IconButton } from "../common/IconButton";

interface AmountBooksState {
  icon: ReactNode;
  text: string;
  data: any;
}

export const HomeComponent: FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch(),
    { books, isLoading } = useSelector(({ book }: RootState) => book),
    reading = books.filter(({ is_completed }: any) => {
      return is_completed === false;
    }),
    finished = books.filter(({ is_completed }: any) => {
      return is_completed === true;
    }),
    AmountBooks: AmountBooksState[] = [
      {
        icon: <BookAdd width={24} />,
        text: "Add",
        data: books.length,
      },
      {
        icon: <BookOpen width={24} />,
        text: "Reading",
        data: reading.length,
      },
      {
        icon: <Book width={24} />,
        text: "Finished",
        data: finished.length,
      },
    ];

  useEffect(() => {
    dispatch(readAllBooksAct());
  }, [dispatch]);

  return (
    <Layout titlePage="Home">
      <p className="font-medium mb-4 text-xl">Overview</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {AmountBooks.map(
          ({ icon, text, data }: AmountBooksState, id: number) => (
            <div
              key={id}
              className="bg-zinc-100 dark:bg-zinc-800 shadow-xl rounded-xl flex p-4"
            >
              <IconButton
                icon={icon}
                className="bg-cyan-400 dark:bg-cyan-500 p-4 rounded-xl shadow-xl text-zinc-900 dark:text-zinc-50"
              />

              <div className="ml-4">
                <p>{`Amount ${text.toLowerCase()}`}</p>
                <span className="text-2xl font-medium">
                  {isLoading ? (
                    <SpinnerIos width={24} className="animate-spin" />
                  ) : (
                    data
                  )}{" "}
                  {data > 1 ? "books" : "book"}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </Layout>
  );
};
