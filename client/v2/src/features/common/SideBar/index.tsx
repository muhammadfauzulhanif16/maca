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
      {
        icon: <BookAdd width={24} />,
        title: "Add",
      },
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
    <>
      <aside className="w-1/4 hidden lg:flex flex-col shadow-sm bg-zinc-100 dark:bg-zinc-800 top-0 bottom-0 p-4 box my-4 ml-4 rounded-xl">
        <div className="flex mb-4 items-center justify-between">
          <Link
            to="/"
            className="text-cyan-400 dark:text-cyan-500 flex items-center px-3"
          >
            <Notebook width={32} />

            <h1 className="font-bold text-2xl ml-4">Maca</h1>
          </Link>

          {/* {isShowText ? (
          <button
            onClick={() => setIsShowText(false)}
            className="dark:hover:text-zinc-900 hover:text-zinc-50 hover:bg-cyan-400 dark:hover:bg-cyan-500 p-2 hover:bg-zinc-100 items-center flex rounded-xl"
          >
            <KeyboardTab width={16} className="rotate-180" />
          </button>
        ) : null} */}
        </div>

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
                navigate(
                  title !== "Dashboard" ? `/${title?.toLowerCase()}` : "/"
                )
              }
            >
              {icon}

              <p className="ml-4 ">{title}</p>
            </button>
          ))}
        </div>

        {/* {isShowText ? null : (
        <div className="flex justify-center">
          <button
            onClick={() => setIsShowText(true)}
            className="dark:hover:text-zinc-900 hover:text-zinc-50 hover:bg-cyan-400 dark:hover:bg-cyan-500 p-2 hover:bg-zinc-100 items-center flex rounded-xl"
          >
            <KeyboardTab width={16} />
          </button>
        </div>
      )} */}
      </aside>

      <div className="bg-zinc-100 dark:bg-zinc-800 lg:hidden grid grid-cols-4 gap-4 fixed bottom-0 bg-red-900 p-4 my-4 mx-4 sm:mx-8 right-0 left-0 rounded-xl">
        {Page.map(({ icon, title }, id) => (
          <button
            title={title}
            key={id}
            className={`${
              titlePage === title
                ? "shadow-sm bg-cyan-400 dark:bg-cyan-500 hover:bg-cyan-400 dark:hover:bg-cyan-500"
                : "hover:shadow-sm hover:bg-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-zinc-900 hover:text-zinc-50"
            } w-full px-2 py-2 rounded-xl font-medium transition-all ease-in-out`}
            onClick={() =>
              navigate(title !== "Dashboard" ? `/${title?.toLowerCase()}` : "/")
            }
          >
            {icon}

            <p className="text-sm">{title}</p>
          </button>
        ))}
      </div>
    </>
  );
};
