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
  data: any;
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
        bgColor: "sky",
        onClick: () => {
          return handleIsCompleted(BookId);
        },
      },
      {
        icon: "edit",
        bgColor: "amber",
      },
      {
        icon: "trash",
        bgColor: "rose",
        onClick: () => {
          return handleDelete(BookId);
        },
      },
    ];

  return (
    <li>
      <>
        <h3>{title}</h3>

        <div className="my-4 sm:my-6 md:my-8">
          {Details.map(
            ({ title, data }: DetailsState): JSX.Element => (
              <p className="detail">
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
                className={`p-2 sm:p-4 rounded-xl hover:bg-${bgColor}-300`}
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
