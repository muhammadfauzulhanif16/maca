import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { readAllBooksAct } from "../../store/actions/book";
import { Layout } from "../common/Layout";

export const ReadingComponent: FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch(),
    books = useSelector(({ book }: RootState) => book.books),
    reading = books.filter(({ is_completed }: any) => {
      return is_completed === false;
    }), Field = ["#", "Title", "Author", "Year", "Action"]

  useEffect(() => {
    dispatch(readAllBooksAct())
  }, [dispatch])

  console.log("reading", reading)

  return (
    <Layout titlePage="Reading">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-zinc-100 dark:divide-zinc-800">
          <thead className="w-full">
            <tr>
              {Field.map((title, id) => (
                <th
                  key={id}
                  className="px-6 py-4 text-left text-xs font-medium text-zinc-500 uppercase "
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y text-zinc-900 dark:text-zinc-50 divide-zinc-100 dark:divide-zinc-800 w-full overflow-y-auto">
            {reading.map(({ title, author, year }: any, id: number) => (
              <tr key={id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{id + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout >
  );
};
