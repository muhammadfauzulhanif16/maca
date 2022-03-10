import { FC } from "react";
import { Person } from "@emotion-icons/fluentui-system-regular";
import { IconButton } from "../IconButton";

export const Header: FC<{}> = (): JSX.Element => {
  return (
    <header>
      <div className="py-4 lg:py-8 border-b-2 border-zinc-100 border-zinc-800 flex justify-end">
        {/* <label
          className="mr-4 transition-all ease-in-out hover:shadow-sm group flex items-center cursor-pointer rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 px-4 py-2"
          htmlFor="search"
        >
          <Search width={24} className="text-slate-500" />
          <input
            id="search"
            name="search"
            className="w-full transition-all ease-in-out group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 ml-4 bg-zinc-50 dark:bg-zinc-900 outline-0"
            type="text"
            placeholder="Search"
          />
        </label> */}

        {/* <div className="">
          <Person width={24} />

          <p className="hidden sm:inline mx-4">Hello, Welcome!</p>
        </div> */}

        <IconButton
          className="transition-all ease-in-out hover:shadow-sm flex rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 px-4 py-2 cursor-pointer"
          icon={<Person width={24} />}
          textClass="hidden sm:inline ml-4"
          text="Hello, Welcome!"
        />
      </div>
    </header>
  );
};
