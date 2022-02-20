import { Shelf } from "../common";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FC } from "react";

interface ReadingComponentProps {
  titlePage: string;
}

export const ReadingComponent: FC<ReadingComponentProps> = ({
  titlePage,
}): JSX.Element => {
  const { books, isLoading } = useSelector(
      ({ bookReducer }: RootState) => bookReducer
    ),
    reading = books?.filter(({ is_completed }: any) => {
      return is_completed === false;
    });

  return <Shelf titlePage={titlePage} books={reading} isLoading={isLoading} />;
};
