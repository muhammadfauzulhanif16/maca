import { FC, ReactNode } from "react";

import { Header } from "../Header";
import { Content } from "../Content";
import { SideBar } from "../SideBar";

interface LayoutProps {
  titlePage?: string;
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({
  titlePage,
  children,
}): JSX.Element => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar titlePage={titlePage} />

      <form className="px-8 col-span-4 font-medium">
        <Header />
        <Content children={children} titlePage={titlePage} />
      </form>
    </div>
  );
};
