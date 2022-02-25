import { FC } from "react";
import { ReadingComponent } from "../../components/Reading";

interface PageProps {
  titlePage: string;
  books: [];
  isLoading: boolean;
}

export const ReadingPage: FC<PageProps> = ({
  titlePage,
  books,
  isLoading,
}): JSX.Element => {
  return (
    <ReadingComponent
      titlePage={titlePage}
      books={books}
      isLoading={isLoading}
    />
  );
};
