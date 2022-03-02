import { FC, ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = ({ children }) => {
  return <div className="py-6">{children}</div>;
};
