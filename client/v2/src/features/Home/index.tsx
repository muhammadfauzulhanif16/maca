import { FC } from "react";
import { Layout } from "../common/Layout";
import { Add } from "@emotion-icons/fluentui-system-regular";
import {
  Book,
  BookAdd,
  BookOpen,
} from "@emotion-icons/fluentui-system-regular";
import { useNavigate } from "react-router-dom";

export const HomeComponent: FC<{}> = (): JSX.Element => {
  const navigate = useNavigate(),
    Page = [
      {
        icon: <BookAdd width={24} className="text-slate-500" />,
        title: "Add",
      },
      {
        icon: <BookOpen width={24} className="text-slate-500" />,
        title: "Reading",
      },
      {
        icon: <Book width={24} className="text-slate-500" />,
        title: "Finished",
      },
    ];

  return (
    <Layout titlePage="Dashboard">
      <div className="mb-6 flex justify-between">
        <p className="text-3xl font-medium">Dashboard</p>

        <button
          onClick={() => navigate("/add")}
          className="py-2 shadow-2xl bg-cyan-700 hover:bg-cyan-800 font-medium px-4 rounded-lg text-cyan-50 flex items-center"
        >
          <Add width={24} className="mr-4" />
          Create book
        </button>
      </div>

      <div>
        <p className="font-medium mb-3 text-xl">Overview</p>

        <div className="grid grid-cols-3 gap-8">
          {Page.map(({ icon, title }) => (
            <div className="font-medium bg-cyan-50 shadow-xl rounded-lg">
              <div className="flex p-4 bg-slate-50 rounded-lg">
                {icon}
                <div className="ml-4">
                  <p className="text-slate-600">{`Amount ${title.toLowerCase()}`}</p>
                  <span className="text-lg">16 book</span>
                </div>
              </div>

              <button
                onClick={() => navigate(`/${title?.toLowerCase()}`)}
                className="text-cyan-500 flex justify-start font-medium rounded-lg px-4 py-2 w-full"
              >
                View all
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
