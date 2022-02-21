import { FC } from "react";

interface FooterProps {
  isFixed?: boolean;
}

export const Footer: FC<FooterProps> = ({ isFixed }): JSX.Element => {
  return (
    <footer
      className={`${
        isFixed ? "fixed" : ""
      } font-medium bottom-0 right-0 left-0 text-center p-4 sm:p-6 md:p-8 z-10`}
    >
      © 2022 Maca by Muhammad Fauzul Hanif. All right reserved.
    </footer>
  );
};
