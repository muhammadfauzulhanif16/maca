import { FC, useState } from "react";
import { Icon } from "../Icon";
import { BookActions } from "./BookActions";

interface BookActionType {
  icon: string;
  bgColor: string;
}

interface Props {
  title: string;
  author: string;
  year: string;
}

export const BookItem: FC<Props> = ({ title, author, year }) => {
  const [action, setAction] = useState<boolean>(false),
    handleAction = () => {
      setAction(!action);
    };

  return (
    <li className="bg-slate-100 dark:bg-slate-800 p-4 sm:p-6 md:p-8 rounded-3xl relative flex flex-col justify-between hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition-all duration-500 ease-in-out">
      <>
        <h3 className="font-bold text-xl truncate group-hover:overflow-visible group-hover:whitespace-normal">
          {title}
        </h3>

        <div className="flex flex-col font-medium my-4 sm:my-6 md:my-8">
          <span className="truncate group-hover:overflow-visible group-hover:whitespace-normal">
            Author: {author}
          </span>
          <span className="truncate group-hover:overflow-visible group-hover:whitespace-normal">
            Year : {year}
          </span>
        </div>
      </>

      <Icon
        icon="dots-horizontal-rounded"
        size="sm"
        className="rounded-md hover:bg-slate-900 dark:hover:bg-slate-50"
        onClick={handleAction}
      />

      <div
        className={`${
          !action ? "hidden" : ""
        } bg-slate-100 dark:bg-slate-800 absolute top-0 left-0 right-0 bottom-0 flex items-center rounded-3xl p-8 flex flex-col`}
      >
        <div className="grid grid-cols-3 w-full h-full flex justify-center items-center">
          {BookActions.map(({ icon, bgColor }: BookActionType, id: number) => (
            <Icon
              key={id}
              icon={icon}
              size="sm"
              onClick={handleAction}
              className={`p-4 rounded-xl hover:bg-${bgColor} dark:hover:bg-${bgColor}`}
            />
          ))}
        </div>

        <Icon
          icon="dots-horizontal-rounded"
          className="w-full rounded-md hover:bg-slate-900 dark:hover:bg-slate-50"
          size="sm"
          onClick={handleAction}
        />
      </div>
    </li>
  );
};
