import { FC } from "react";
import { AddComponent } from "../../components";
import { PageProps } from "../../Routers";

export const AddPage: FC<PageProps> = ({ titlePage }): JSX.Element => {
  return <AddComponent titlePage={titlePage} />;
};
