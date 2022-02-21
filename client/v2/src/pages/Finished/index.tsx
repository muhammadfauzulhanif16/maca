import { FC } from "react";
import { FinishedComponent } from "../../components/Finished";

interface PageProps {
  titlePage: string;
  books: [];
  isLoading: boolean;
}

export const FinishedPage: FC<PageProps> = ({
  titlePage,
  books,
  isLoading,
}): JSX.Element => {
  return (
    <FinishedComponent
      titlePage={titlePage}
      books={books}
      isLoading={isLoading}
    />
  );
};
