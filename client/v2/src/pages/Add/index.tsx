import { FC } from "react";
import { AddComponent } from "../../components";

interface PageProps {
  titlePage: string;
  books: [];
}

export const AddPage: FC<PageProps> = ({ titlePage, books }): JSX.Element => {
  return <AddComponent titlePage={titlePage} books={books} />;
};
