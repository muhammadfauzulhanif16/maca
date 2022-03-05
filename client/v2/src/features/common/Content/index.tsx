import { FC, ReactNode } from "react";
import { Add, ArrowEnterLeft } from "@emotion-icons/fluentui-system-regular";
import { useNavigate } from "react-router-dom";

interface ContentProps {
  children?: ReactNode;
  titlePage?: string;
}

export const Content: FC<ContentProps> = ({ children, titlePage }) => {
  const navigate = useNavigate();

  return (
    titlePage === "Add" ? <>{children} </>
      :
      <div className="py-6">
        <div className="mb-6 flex justify-between">
          <p className="text-3xl">
            {titlePage}
          </p>

          <button
            onClick={() => navigate("/add")}
            className="font-medium shadow-sm py-2 bg-cyan-400 dark:bg-cyan-500 dark:hover:text-zinc-900 hover:text-zinc-50 px-4 rounded-xl flex items-center"
          >
            <Add width={24} className="mr-4" />
            Create book
          </button>
        </div>

        {children}
      </div >
  );
};
