import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateIsCompletedAct,
  deleteBookAct,
} from "../../../store/actions/book";
import { Icon } from "../Icon";
import "./index.scss";

interface BookItemProps {
  BookId: number;
  title: string;
  author: string;
  year: string;
}

interface DetailsState {
  title: string;
  data: string;
}

interface ActionsState {
  icon: string;
  bgColor: string;
  onClick?: () => void;
}

export const BookItem: FC<BookItemProps> = ({
  BookId,
  title,
  author,
  year,
}): JSX.Element => {
  const dispatch = useDispatch(),
    [action, setAction] = useState<boolean>(false),
    handleAction = (): void => {
      setAction(!action);
    },
    handleIsCompleted = (BookId: number): void => {
      dispatch(updateIsCompletedAct(BookId));
    },
    handleDelete = (BookId: number): void => {
      dispatch(deleteBookAct(BookId));
    },
    Details: DetailsState[] = [
      {
        title: "Author",
        data: author,
      },
      {
        title: "Year",
        data: year,
      },
    ],
    Actions: ActionsState[] = [
      {
        icon: "book",
        bgColor: "hover:bg-sky-300",
        onClick: () => {
          setAction(false);
          handleIsCompleted(BookId);
        },
      },
      {
        icon: "edit",
        bgColor: "hover:bg-amber-300",
      },
      {
        icon: "trash",
        bgColor: "hover:bg-rose-300",
        onClick: () => {
          setAction(false);
          handleDelete(BookId);
        },
      },
    ];

  return (
    <li>
      <>
        <h3>{title}</h3>

        <div className="my-4 sm:my-6 md:my-8">
          {Details.map(
            ({ title, data }: DetailsState, id: number): JSX.Element => (
              <p className="detail" key={id}>
                {title}: {data}
              </p>
            )
          )}
        </div>
      </>

      <Icon
        icon="dots-horizontal-rounded"
        size="sm"
        className="dots"
        onClick={handleAction}
      />

      <div className={`${!action ? "hidden" : "flex"} action-container`}>
        <div className="actions">
          {Actions.map(
            (
              { icon, bgColor, onClick }: ActionsState,
              id: number
            ): JSX.Element => (
              <Icon
                key={id}
                icon={icon}
                size="sm"
                onClick={onClick}
                className={`p-2 sm:p-4 rounded-xl ${bgColor}`}
              />
            )
          )}
        </div>

        <Icon
          icon="dots-horizontal-rounded"
          className="w-full dots"
          size="sm"
          onClick={handleAction}
        />
      </div>
    </li>
  );
};
