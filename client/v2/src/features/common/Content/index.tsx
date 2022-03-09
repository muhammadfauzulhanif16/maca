import { FC, ReactNode } from "react";
import { Add } from "@emotion-icons/fluentui-system-regular";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../IconButton";

interface ContentProps {
  children?: ReactNode;
  titlePage?: string;
}

export const Content: FC<ContentProps> = ({
  children,
  titlePage,
}): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      {titlePage === "Add" ? (
        <>{children}</>
      ) : (
        <>
          <div className="my-8 flex justify-between">
            <p className="text-3xl font-medium">
              {titlePage === "Home" ? "Dashboard" : titlePage}
            </p>

            <IconButton
              className="cursor-pointer font-medium shadow-xl py-2 bg-cyan-400 dark:bg-cyan-500 hover:bg-cyan-500 hover:bg-cyan-400 dark:hover:text-zinc-900 hover:text-zinc-50 px-4 rounded-xl flex items-center"
              onClick={() => navigate("/add")}
              icon={<Add width={24} />}
              text="Create book"
              textClass="ml-4"
            />
          </div>

          {children}
        </>
      )}
    </>
  );
};
