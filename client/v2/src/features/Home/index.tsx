import { FC, useEffect } from "react";
import { Layout } from "../common/Layout";
import {
  Book,
  BookAdd,
  BookOpen,
} from "@emotion-icons/fluentui-system-regular";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { readAllBooksAct } from "../../store/actions/book";

export const HomeComponent: FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch(),
    books = useSelector(({ book }: RootState) => book.books),
    reading = books.filter(({ is_completed }: any) => {
      return is_completed === false;
    }),
    finished = books.filter(({ is_completed }: any) => {
      return is_completed === true;
    }),
    Page = [
      {
        icon: <BookAdd width={24} />,
        title: "Add",
        data: books.length
      },
      {
        icon: <BookOpen width={24} />,
        title: "Reading",
        data: reading.length
      },
      {
        icon: <Book width={24} />,
        title: "Finished",
        data: finished.length
      },
    ];

  useEffect(() => {
    dispatch(readAllBooksAct())
  }, [dispatch])

  return (
    <Layout titlePage="Home">
      <div>
        <p className="font-medium mb-3 text-xl">Overview</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
          {Page.map(({ icon, title, data }, id) => (
            <div
              key={id}
              className="bg-zinc-100 dark:bg-zinc-800 shadow-sm rounded-xl flex p-4"
            >
              <div className="bg-cyan-400 dark:bg-cyan-500 p-4 rounded-xl shadow-sm text-zinc-50">
                {icon}
              </div>

              <div className="ml-4">
                <p>{`Amount ${title.toLowerCase()}`}</p>
                <span className="text-2xl font-medium">
                  {data} {data > 1 ? "books" : "book"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
