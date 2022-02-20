import { Shelf } from "../common";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FC } from "react";

interface FinishedComponentProps {
  titlePage: string;
}

export const FinishedComponent: FC<FinishedComponentProps> = ({
  titlePage,
}): JSX.Element => {
  const { books, isLoading } = useSelector(
      ({ bookReducer }: RootState) => bookReducer
    ),
    finished = books?.filter(({ is_completed }: any) => {
      return is_completed === true;
    });

  return <Shelf titlePage={titlePage} books={finished} isLoading={isLoading} />;
};
