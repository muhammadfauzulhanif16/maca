import { FC } from "react";
import { Icon } from "../common/Icon";
import { Header } from "../common/Header";
import "./index.scss";
import { Footer } from "../common/Footer";
import { Loading } from "../common";

interface PageIconsState {
  icon: string;
  title: string;
  amount: any;
}

interface HomeComponentProps {
  books: [];
  reading: [];
  finished: [];
}

export const HomeComponent: FC<HomeComponentProps> = ({
  books,
  reading,
  finished,
}): JSX.Element => {
  const PageIcons: PageIconsState[] = [
    { icon: "plus", title: "Add", amount: books },
    { icon: "book-open", title: "Reading", amount: reading },
    { icon: "book", title: "Finished", amount: finished },
  ];

  return (
    <div className="home-container">
      <Header fixed />

      <div className="page-icons-container">
        {PageIcons.map(
          (
            { icon, title, amount }: PageIconsState,
            id: number
          ): JSX.Element => (
            <div
              className=" relative font-medium text-slate-900 hover:text-slate-50 dark:text-slate-50 dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-50 rounded-3xl"
              key={id}
            >
              <Icon
                icon={icon}
                className="p-4 sm:p-6 md:p-8"
                link={title.toLowerCase()}
                size="lg"
                title={`${title} book`}
              />

              <span className="absolute top-0 right-0 p-4 rounded-full transition-all duration-500 ease-in-out cursor-pointer">
                {amount.length}
              </span>
            </div>
          )
        )}
      </div>

      <Footer isFixed />
    </div>
  );
};
