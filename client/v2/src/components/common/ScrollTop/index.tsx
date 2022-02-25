import { FC } from "react";
import { Icon } from "../Icon";

export const ScrollTop: FC<{}> = (): JSX.Element => {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Icon
      icon="up-arrow-alt"
      size="sm"
      className="fixed bottom-0 right-0 z-10 m-4 sm:m-6 md:m-8 p-2 rounded-xl hover:bg-slate-900 dark:hover:bg-slate-50"
      onClick={ScrollToTop}
    />
  );
};
