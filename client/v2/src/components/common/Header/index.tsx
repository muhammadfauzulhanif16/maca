import { FC } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icon";
import "./index.css";

interface Props {
  fixed?: boolean;
  title?: string;
  count?: number;
}

export const Header: FC<Props> = ({ fixed, title, count }) => {
  return (
    <header className={`${fixed ? "header-fixed" : "header-sticky"}`}>
      <div
        className={`${title ? "border-b-2" : ""} ${
          fixed ? "" : "py-4 sm:py-6 md:py-8"
        } py-4 sm:py-6 md:py-8 w-full grid grid-cols-1 sm:grid-cols-3`}
      >
        <div className="grid grid-cols-2">
          <Link to="/" className="text-5xl font-bold">
            Maca
          </Link>

          {title ? (
            <div className="flex sm:hidden justify-end items-center">
              <Icon
                icon="x"
                size="sm"
                className="p-2 rounded-xl hover:bg-slate-900 dark:hover:bg-slate-50"
                link="/"
              />
            </div>
          ) : (
            ""
          )}
        </div>

        {title ? (
          <div className="flex justify-between sm:hidden">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mr-4">{`${title} Book`}</h1>
              <span>({count})</span>
            </div>

            <div className="flex justify-end items-center">
              <Icon
                icon="search"
                size="sm"
                className="p-2 rounded-xl hover:bg-slate-900 dark:hover:bg-slate-50"
                link="/"
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {title ? (
          <>
            <div className="hidden sm:flex items-center justify-center">
              <h1 className="text-2xl font-bold mr-4">{`${title} Book`}</h1>
              <span>({count})</span>
            </div>

            <div className="hidden sm:flex justify-end items-center">
              <Icon
                icon="search"
                size="sm"
                className="p-2 rounded-xl hover:bg-slate-900 dark:hover:bg-slate-50"
                link="/"
              />

              <Icon
                icon="x"
                size="sm"
                className="ml-2 p-2 rounded-xl hover:bg-slate-900 dark:hover:bg-slate-50"
                link="/"
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};
