import { FC, useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { readAllBooksAct } from "../../store/actions/book";
import { Layout } from "../common/Layout";
import { Shelf } from "../common/Shelf";

export const FinishedComponent: FC<{}> = (): JSX.Element => {
  const dispatch = useAppDispatch(),
    { books, isLoading, success, error } = useAppSelector(
      ({ book }: RootState) => book
    ),
    finished = books.filter(({ is_completed }: any) => {
      return is_completed === true;
    });

  useEffect(() => {
    dispatch(readAllBooksAct());
  }, [dispatch]);

  return (
    <Layout
      titlePage="Finished"
      success={success}
      error={error}
      isLoading={isLoading}
    >
      <Shelf books={finished} isLoading={isLoading} />
    </Layout>
  );
};
