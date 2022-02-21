import { Shelf } from "../common";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FC } from "react";

interface FinishedComponentProps {
  titlePage: string;
  books: [];
  isLoading: boolean;
}

export const FinishedComponent: FC<FinishedComponentProps> = ({
  titlePage,
  books,
  isLoading,
}): JSX.Element => {
  return <Shelf titlePage={titlePage} books={books} isLoading={isLoading} />;
};
