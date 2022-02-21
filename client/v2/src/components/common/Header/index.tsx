import { FC } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icon";
import "./index.scss";

export interface HeaderProps {
  fixed?: boolean;
  title?: string;
  count?: number;
}

export const Header: FC<HeaderProps> = ({
  fixed,
  title,
  count,
}): JSX.Element => {
  return (
    <header className={`${fixed ? "fixed" : "sticky"}`}>
      <div
        className={`${title ? "border-b-2" : ""} ${
          fixed ? "" : "py-4 sm:py-6 md:py-8"
        } header-container`}
      >
        <div className="grid grid-cols-2">
          <Link to="/" className="text-5xl font-bold">
            Maca
          </Link>

          {/* small */}
          {title ? (
            <div className="flex sm:hidden justify-end items-center">
              <Icon icon="x" size="sm" className="icon" link="/" />
            </div>
          ) : (
            ""
          )}
        </div>

        {/* small */}
        {title ? (
          <div className="flex justify-between sm:hidden">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mr-4">{`${title} Book`}</h1>
              <span>({count})</span>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* large */}
        {title ? (
          <>
            <div className="hidden sm:flex items-center justify-center">
              <h1 className="text-2xl font-bold mr-4">{`${title} Book`}</h1>
              <span>({count})</span>
            </div>

            <div className="hidden sm:flex justify-end items-center">
              <Icon icon="x" size="sm" className="ml-2 icon" link="/" />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};
