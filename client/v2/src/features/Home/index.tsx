import { FC } from "react";
import { Layout } from "../common/Layout";
import {
  Book,
  BookAdd,
  BookOpen,
} from "@emotion-icons/fluentui-system-regular";

export const HomeComponent: FC<{}> = (): JSX.Element => {
  const Page = [
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
    <Layout titlePage="Dashboard">
      <div>
        <p className="font-medium mb-3 text-xl">Overview</p>

        <div className="grid grid-cols-3 gap-8">
          {Page.map(({ icon, title }, id) => (
            <div
              key={id}
              className="bg-zinc-100 dark:bg-zinc-800 shadow-sm rounded-xl flex p-4"
            >
              <div className="bg-cyan-400 dark:bg-cyan-500 p-4 rounded-xl shadow-sm text-zinc-50">
                {icon}
              </div>

              <div className="ml-4">
                <p>{`Amount ${title.toLowerCase()}`}</p>
                <span className="text-2xl font-medium">
                  0 {0 > 1 ? "books" : "book"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
