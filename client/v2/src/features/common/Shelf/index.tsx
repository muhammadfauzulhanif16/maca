import { FC, useEffect } from "react";
import {
  Book,
  Delete,
  SpinnerIos,
  BookOpen,
} from "@emotion-icons/fluentui-system-regular";
import {
  readAllBooksAct,
  updateIsCompletedAct,
} from "../../../store/actions/book";
import { deleteBookAct } from "../../../store/actions/book";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { IconButton } from "../IconButton";

interface ShelfProps {
  books?: object[];
  isLoading?: boolean;
}

// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   year: string;
//   isCompleted: boolean;
// }

export const Shelf: FC<ShelfProps> = ({
  books,
  isLoading,
}: ShelfProps): JSX.Element => {
  const dispatch = useAppDispatch(),
    navigate = useNavigate(),
    TableFields: string[] = ["#", "Title", "Author", "Published", "Action"],
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
    <div className="overflow-auto h-80">
      {isLoading ? (
        <IconButton
          className="dark:hover:text-zinc-900 hover:text-zinc-50 p-2 mx-2 flex justify-center items-center"
          icon={<SpinnerIos width={32} className="animate-spin" />}
          text="Loading"
          textClass="ml-4"
        />
      ) : (
        <table className="w-full divide-y divide-zinc-100 dark:divide-zinc-800">
          <thead className="sticky top-0 bg-zinc-50 dark:bg-zinc-900">
            <tr>
              {TableFields.map(
                (title: string, id: number): JSX.Element => (
                  <th
                    key={id}
                    className="py-4 text-center text-left text-xs font-medium text-zinc-500 uppercase"
                  >
                    {title}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y text-zinc-900 dark:text-zinc-50 divide-zinc-100 dark:divide-zinc-800">
            {books?.map(
              (
                {
                  id,
                  title,
                  author,
                  published,
                  is_completed: isCompleted,
                }: any,
                BookId: number
              ) => (
                <tr key={id}>
                  <td className="px-6 py-4 text-sm">{BookId + 1}</td>
                  <td className="px-6 py-4 text-sm">{title}</td>
                  <td className="px-6 py-4 text-sm">{author}</td>
                  <td className="px-6 py-4 text-sm">{published}</td>
                  <td className="px-6 py-4 text-sm flex justify-center dark:text-zinc-50 text-zinc-900">
                    <IconButton
                      className={`cursor-${
                        isLoading ? "progress" : "pointer"
                      } dark:hover:text-zinc-900 hover:text-zinc-50 p-2 mx-1 bg-blue-400 dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-400 flex rounded-xl`}
                      onClick={() => {
                        handleIsCompleted(id);
                        setTimeout(
                          () =>
                            navigate(
                              isCompleted === false ? "/finished" : "/reading"
                            ),
                          1000
                        );
                      }}
                      icon={
                        isCompleted === false ? (
                          <Book width={16} />
                        ) : (
                          <BookOpen width={16} />
                        )
                      }
                    />

                    <IconButton
                      className={`cursor-${
                        isLoading ? "progress" : "pointer"
                      } dark:hover:text-zinc-900 hover:text-zinc-50 p-2 mx-1 bg-rose-400 dark:bg-rose-500 hover:bg-rose-500 dark:hover:bg-rose-400 flex rounded-xl`}
                      onClick={() => {
                        handleDelete(id);
                        setTimeout(() => window.location.reload(), 1000);
                      }}
                      icon={<Delete width={16} />}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};
