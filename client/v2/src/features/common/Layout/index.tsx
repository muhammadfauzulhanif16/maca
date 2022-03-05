import { FC, ReactNode } from "react";
import { Header } from "../Header";
import { Content } from "../Content";
import { SideBar } from "../SideBar";
import { useNavigate } from "react-router-dom";
import {
  Book,
  BookAdd,
  BookOpen,
  Home,
} from "@emotion-icons/fluentui-system-regular";

interface LayoutProps {
  titlePage?: string;
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({
  titlePage,
  children,
}): JSX.Element => {
  const navigate = useNavigate(),
    Page = [
      {
        icon: <Home width={24} />,
        title: "Home",
      },
      {
        icon: <BookAdd width={24} />,
        title: "Add",
      },
      {
        icon: <BookOpen width={24} />,
        title: "Reading",
      },
      {
        icon: <Book width={24} />,
        title: "Finished",
      },
    ];

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
