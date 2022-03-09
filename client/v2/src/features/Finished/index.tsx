import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { readAllBooksAct } from "../../store/actions/book";
import { Layout } from "../common/Layout";
import { Book, Delete } from "@emotion-icons/fluentui-system-regular";
import { updateIsCompletedAct } from "../../store/actions/book";
import { deleteBookAct } from "../../store/actions/book";
import { useNavigate } from "react-router-dom";

export const FinishedComponent: FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch(),
    navigate = useNavigate(),
    books = useSelector(({ book }: RootState) => book.books),
    finished = books.filter(({ is_completed }: any) => {
      return is_completed === true;
    }),
    Field = ["#", "Title", "Author", "Year", "Action"],
    handleIsCompleted = (BookId: number): void => {
      dispatch(updateIsCompletedAct(BookId));
    },
    handleDelete = (BookId: number): void => {
      dispatch(deleteBookAct(BookId));
    };

  useEffect(() => {
    dispatch(readAllBooksAct());
  }, [dispatch]);

  return (
    <Layout titlePage="Finished">
      <div className="overflow-auto h-96">
        <table className="w-full divide-y divide-zinc-100 dark:divide-zinc-800">
          <thead className="sticky top-0 bg-zinc-50 dark:bg-zinc-900">
            <tr>
              {Field.map((title, id) => (
                <th
                  key={id}
                  className="py-4 text-center text-left text-xs font-medium text-zinc-500 uppercase "
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y text-zinc-900 dark:text-zinc-50 divide-zinc-100 dark:divide-zinc-800">
            {finished.map(
              ({ id, title, author, year }: any, BookId: number) => (
                <tr key={id}>
                  <td className="px-6 py-4 text-sm">{BookId + 1}</td>
                  <td className="px-6 py-4 text-sm">{title}</td>
                  <td className="px-6 py-4 text-sm">{author}</td>
                  <td className="px-6 py-4 text-sm">{year}</td>
                  <td className="px-6 py-4 text-sm flex justify-center dark:text-zinc-50 text-zinc-900">
                    <button
                      className="p-2 mx-2 bg-blue-400 dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-400 flex rounded-xl"
                      onClick={() => {
                        handleIsCompleted(id);
                        setTimeout(() => navigate("/reading"), 3000);
                      }}
                    >
                      <Book width={16} />
                    </button>

                    <button
                      className="p-2 mx-2 bg-rose-400 dark:bg-rose-500 hover:bg-rose-500 dark:hover:bg-rose-400 flex rounded-xl"
                      onClick={() => {
                        handleDelete(id);
                        setInterval(() => window.location.reload(), 3000);
                      }}
                    >
                      <Delete width={16} />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
