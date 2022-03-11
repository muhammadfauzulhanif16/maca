import { FC, ReactNode } from "react";
import { Header } from "../Header";
import { Content } from "../Content";
import { SideBar } from "../SideBar";
import { Message } from "../Message";

interface LayoutProps {
  titlePage?: string;
  children?: ReactNode;
  success?: string;
  error?: string;
  isLoading?: boolean;
}

export const Layout: FC<LayoutProps> = ({
  titlePage,
  children,
  success,
  error,
  isLoading,
}): JSX.Element => {
  return (
    <div className="flex h-screen">
      {isLoading ? null : <Message success={success} error={error} />}

      <SideBar titlePage={titlePage} />

      <div className="px-4 sm:px-8 w-full">
        <Header />

        <Content children={children} titlePage={titlePage} />
      </div>
    </div>
  );
};
