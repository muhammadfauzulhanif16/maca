import { FC } from "react";
import { Footer } from "../Footer";
import { Icon } from "../Icon";

interface NoDataProps {
  icon: string;
  title: string;
}

export const NoData: FC<NoDataProps> = ({ icon, title }): JSX.Element => {
  return (
    <>
      <Icon
        icon={icon}
        size="lg"
        title={`No ${title.toLowerCase()} book data`}
        className="p-4 sm:p-6 md:p-8 absolute top-0 h-screen right-0 left-0 flex justify-center text-slate-300 dark:text-slate-600"
      />

      <Footer isFixed />
    </>
  );
};
