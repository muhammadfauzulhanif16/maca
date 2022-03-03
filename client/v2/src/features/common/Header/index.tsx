import { FC } from "react";
import { Search, Person } from "@emotion-icons/fluentui-system-regular";

export const Header: FC<{}> = (): JSX.Element => {
  return (
    <header>
      <div className="py-4 border-b-2 flex justify-between">
        <label
          className="transition-all ease-in-out hover:shadow-sm group flex items-center cursor-pointer rounded-lg hover:bg-slate-200 px-4 py-2"
          htmlFor="search"
        >
          <Search width={24} className="text-slate-500" />
          <input
            id="search"
            name="search"
            className="transition-all ease-in-out group-hover:bg-slate-200 ml-4 bg-slate-100 outline-0"
            type="text"
            placeholder="Search"
          />
        </label>

        <div className="transition-all ease-in-out hover:shadow-sm flex rounded-lg hover:bg-slate-200 px-4 py-2 cursor-pointer">
          <Person width={24} className="text-slate-500" />

          <p className="mx-4">Hello, Welcome!</p>
        </div>
      </div>
    </header>
  );
};
