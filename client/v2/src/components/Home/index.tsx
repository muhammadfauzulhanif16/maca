import { FC } from "react";
import { Icon } from "../common/Icon";
import { PageIcons } from "./PageIcons";
import { Header } from "../common/Header";

// interface PageIconsState {
//   icon: string;
//   title: string;
// }

export const HomeComponent: FC<{}> = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 h-screen flex justify-center items-center">
      <Header fixed />

      <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 md:gap-16">
        {PageIcons.map(({ icon, title }, id: number) => (
          <Icon
            icon={icon}
            key={id}
            className="p-8 rounded-3xl hover:bg-slate-900 dark:hover:bg-slate-50"
            link={title}
            size="lg"
            title={`${title} book`}
          />
        ))}
      </div>
    </div>
  );
};
