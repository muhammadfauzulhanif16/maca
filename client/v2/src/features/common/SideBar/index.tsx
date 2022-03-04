import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Notebook,
  Book,
  BookAdd,
  BookOpen,
  Home,
} from "@emotion-icons/fluentui-system-regular";

interface SideBarProps {
  titlePage?: string;
}

export const SideBar: FC<SideBarProps> = ({ titlePage }) => {
  const navigate = useNavigate(),
    Page = [
      {
        icon: <Home width={24} />,
        title: "Dashboard",
      },
      { icon: <BookAdd width={24} />, title: "Add" },
      {
        icon: <BookOpen width={24} />,
        title: "Reading",
      },
      {
        icon: <Book width={24} />,
        title: "Finished",
      },
    ];

  return (
    <aside className="shadow-sm col-span-1 bg-zinc-100 dark:bg-zinc-800 top-0 bottom-0 p-4 box my-4 ml-4 rounded-xl">
      <Link
        to="/"
        className="text-cyan-400 dark:text-cyan-500 flex items-center mb-4 px-3"
      >
        <Notebook width={32} />
        <h1 className="font-bold text-3xl ml-4">Maca</h1>
      </Link>

      <div>
        {Page.map(({ icon, title }, id) => (
          <button
            key={id}
            className={`${
              titlePage === title
                ? "shadow-sm bg-cyan-400 dark:bg-cyan-500 hover:bg-cyan-400 dark:hover:bg-cyan-500"
                : "hover:shadow-sm hover:bg-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-zinc-900 hover:text-zinc-50"
            } w-full flex px-4 py-2 rounded-xl mb-4 font-medium transition-all ease-in-out`}
            onClick={() =>
              navigate(title !== "Dashboard" ? `/${title?.toLowerCase()}` : "/")
            }
          >
            {icon}
            <p className="ml-4 ">{title}</p>
          </button>
        ))}
      </div>
    </aside>
  );
};
