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
        icon: <Home width={24} className="text-cyan-100" />,
        title: "Dashboard",
      },
      { icon: <BookAdd width={24} className="text-cyan-100" />, title: "Add" },
      {
        icon: <BookOpen width={24} className="text-cyan-100" />,
        title: "Reading",
      },
      {
        icon: <Book width={24} className="text-cyan-100" />,
        title: "Finished",
      },
    ];

  return (
    <aside className="shadow-sm col-span-1 bg-cyan-500 top-0 bottom-0 p-4 box my-4 ml-4 rounded-xl">
      <Link to="/" className="flex items-center mb-4 px-3">
        <Notebook width={32} className="text-slate-900" />
        <h1 className="font-bold text-3xl text-slate-50 ml-4">Maca</h1>
      </Link>

      <div>
        {Page.map(({ icon, title }, id) => (
          <button
            key={id}
            className={`${
              titlePage === title
                ? "shadow-sm hover:bg-cyan-900 bg-cyan-900 "
                : "hover:shadow-sm hover:bg-cyan-700"
            } text-cyan-50 w-full flex px-4 py-2 rounded-lg mb-4 font-medium transition-all ease-in-out`}
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
