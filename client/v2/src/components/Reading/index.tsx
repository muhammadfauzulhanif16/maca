import { Shelf } from "../common";

import { FC } from "react";

interface ReadingComponentProps {
  titlePage: string;
  books: [];
  isLoading: boolean;
}

export const ReadingComponent: FC<ReadingComponentProps> = ({
  titlePage,
  books,
  isLoading,
}): JSX.Element => {
  return <Shelf titlePage={titlePage} books={books} isLoading={isLoading} />;
};
