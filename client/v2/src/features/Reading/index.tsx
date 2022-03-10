import { FC, useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { readAllBooksAct } from "../../store/actions/book";
import { Layout } from "../common/Layout";
import { Shelf } from "../common/Shelf";

export const ReadingComponent: FC<{}> = (): JSX.Element => {
  const dispatch = useAppDispatch(),
    { books, isLoading } = useAppSelector(({ book }: RootState) => book),
    reading = books.filter(({ is_completed }: any) => {
      return is_completed === false;
    });

  useEffect(() => {
    dispatch(readAllBooksAct());
  }, [dispatch]);

  return (
    <Layout titlePage="Reading">
      <Shelf books={reading} isLoading={isLoading} />
    </Layout>
  );
};
