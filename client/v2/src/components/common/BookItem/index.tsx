import { FC, useState } from "react";
import { Icon } from "../Icon";
import { BookActions, BookActionsState } from "./BookActions";
import "./index.scss";

interface BookItemProps {
  title: string;
  author: string;
  year: string;
}

export const BookItem: FC<BookItemProps> = ({
  title,
  author,
  year,
}): JSX.Element => {
  const [action, setAction] = useState<boolean>(false),
    handleAction = () => {
      setAction(!action);
    };

  return (
    <li>
      <>
        <h3>{title}</h3>

        <span className="detail mt-4 sm:mt-6 md:mt-8">Author: {author}</span>
        <span className="detail mb-4 sm:mb-6 md:mb-8">Year : {year}</span>
      </>

      <Icon
        icon="dots-horizontal-rounded"
        size="sm"
        className="dots"
        onClick={handleAction}
      />

      <div className={`${!action ? "hidden" : "flex"} action-container`}>
        <div className="actions">
          {BookActions.map(
            ({ icon, bgColor }: BookActionsState, id: number): JSX.Element => (
              <Icon
                key={id}
                icon={icon}
                size="sm"
                onClick={handleAction}
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
