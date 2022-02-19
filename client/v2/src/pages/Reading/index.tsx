import { FC } from "react";
import { ReadingComponent } from "../../components/Reading";
import { PageProps } from "../../Routers";

export const ReadingPage: FC<PageProps> = ({ titlePage }): JSX.Element => {
  return <ReadingComponent titlePage={titlePage} />;
};
