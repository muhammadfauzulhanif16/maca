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
    <div className="flex h-screen">
      <SideBar titlePage={titlePage} />

      <div className="px-4 sm:px-8 w-full">
        <Header />

        <Content children={children} titlePage={titlePage} />
      </div>
    </div >
  );
};
