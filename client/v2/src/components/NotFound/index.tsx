import { FC } from "react";
import { Icon } from "../common/Icon";

export const NotFoundComponent: FC<{}> = (): JSX.Element => {
  return (
    <div className="flex justify-center flex-col items-center text-slate-300 h-screen">
      <Icon icon="search" size="lg" title="404" className="p-0" />

      <p className="font-medium text-xl">Page not found, please come back</p>

      <br />

      <Icon
        title="Home"
        link="/"
        className="px-8 py-2 rounded-xl text-xl hover:bg-slate-900 dark:hover:bg-slate-50"
      />
    </div>
  );
};
