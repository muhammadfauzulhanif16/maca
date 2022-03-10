import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notebook } from "@emotion-icons/fluentui-system-regular";
import { IconButton } from "../IconButton";
import { PageNavs, PageNavsState } from "./PageNavs";

interface SideBarProps {
  titlePage?: string;
}

export const SideBar: FC<SideBarProps> = ({ titlePage }) => {
  const navigate = useNavigate(),
    [isShowText, setIsShowText] = useState(true),
    showText = () => {
      localStorage.setItem("isShowText", "true");
      setIsShowText(true);
    },
    setShowText = () => {
      localStorage.setItem("isShowText", "false");
      setIsShowText(false);
    };

  // if (localStorage.getItem("isShowText") === "false") {
  //   setShowText();
  // } else {
  //   showText();
  // }

  return (
    <>
      <aside
        className={`${
          isShowText ? "w-1/4 " : "w-max"
        } transition-all ease-in-out hidden lg:flex flex-col shadow-xl bg-zinc-100 dark:bg-zinc-800 top-0 bottom-0 p-4 box my-8 ml-8 rounded-xl`}
      >
        <div className="flex mb-4 items-center justify-between">
          <IconButton
            className="cursor-pointer px-3 text-cyan-400 dark:text-cyan-500 flex items-center font-bold text-2xl"
            icon={<Notebook width={32} />}
            onClick={() => {
              navigate("/");
              localStorage.getItem("isShowText") ? setShowText() : showText();
            }}
            text={isShowText ? "Maca" : ""}
            textClass={isShowText ? "ml-4" : ""}
          />

          {/* {isShowText ? (
            <IconButton
              className="transition-all ease-in-out cursor-pointer hover:text-zinc-50 dark:hover:text-zinc-900 hover:bg-cyan-500 dark:hover:bg-cyan-400 p-2 items-center flex rounded-xl"
              icon={<KeyboardTab width={16} className="rotate-180" />}
              onClick={() => setShowText()}
            />
          ) : (
            ""
          )} */}
        </div>

        {PageNavs.map(
          ({ icon, text }: PageNavsState, id: number): JSX.Element => (
            <IconButton
              key={id}
              className={`${
                titlePage === text
                  ? "shadow-xl bg-cyan-400 dark:bg-cyan-500 hover:bg-cyan-400 dark:hover:bg-cyan-500"
                  : "hover:shadow-xl hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-zinc-50 dark:hover:text-zinc-900"
              } w-full flex px-4 py-2 rounded-xl mb-4 font-medium transition-all ease-in-out cursor-pointer`}
              icon={icon}
              onClick={() =>
                navigate(text === "Home" ? "/" : `/${text?.toLowerCase()}`)
              }
              text={isShowText ? text : ""}
              textClass={isShowText ? "ml-4" : ""}
            />
          )
        )}

        {/* {isShowText ? (
          ""
        ) : (
          <div className="flex justify-center">
            <IconButton
              className="transition-all ease-in-out cursor-pointer hover:text-zinc-50 dark:hover:text-zinc-900 hover:bg-cyan-500 dark:hover:bg-cyan-400 p-2 justify-center flex rounded-xl"
              icon={<KeyboardTab width={16} />}
              onClick={() => showText()}
            />
          </div>
        )} */}
      </aside>

      <div className="shadow-xl bg-zinc-100 dark:bg-zinc-800 lg:hidden grid grid-cols-4 gap-2 fixed bottom-0 p-2 my-4 mx-4 right-0 left-0 rounded-xl">
        {PageNavs.map(({ icon, text }: PageNavsState, id: number) => (
          <IconButton
            key={id}
            icon={icon}
            className={`${
              titlePage === text
                ? "shadow-xl bg-cyan-400 dark:bg-cyan-500 hover:bg-cyan-400 dark:hover:bg-cyan-500"
                : "hover:shadow-xl hover:bg-cyan-500 dark:hover:bg-cyan-400"
            } w-full p-2 rounded-xl text-sm transition-all ease-in-out cursor-pointer flex flex-col items-center`}
            onClick={() =>
              navigate(text === "Home" ? "/" : `/${text?.toLowerCase()}`)
            }
            text={text}
          />
        ))}
      </div>
    </>
  );
};
