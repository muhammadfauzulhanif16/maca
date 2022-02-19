import { FC } from "react";
import { FinishedComponent } from "../../components/Finished";
import { PageProps } from "../../Routers";

export const FinishedPage: FC<PageProps> = ({ titlePage }): JSX.Element => {
  return <FinishedComponent titlePage={titlePage} />;
};
