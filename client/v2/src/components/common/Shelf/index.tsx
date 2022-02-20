import { Header, Loading, NoData, ScrollTop } from "../../common";
import { useDispatch } from "react-redux";
import { FC, useEffect, useState } from "react";
import { readAllBooksAct } from "../../../store/actions/book";
import { BookItem } from "../BookItem";

interface ShelfProps {
  titlePage: string;
  books: [];
  isLoading: boolean;
}

interface BookState {
  id: number;
  title: string;
  author: string;
  year: string;
}

export const Shelf: FC<ShelfProps> = ({
  titlePage,
  books,
  isLoading,
}): JSX.Element => {
  const dispatch = useDispatch(),
    [scrollTop, setScrollTop] = useState<boolean>(false),
    scroolHeight = () => {
      window.scrollY >= 32 ? setScrollTop(true) : setScrollTop(false);
    };

  window.addEventListener("scroll", scroolHeight);

  useEffect(() => {
    dispatch(readAllBooksAct());

    scroolHeight();
    return () => setScrollTop(false);
  }, [dispatch]);

  return (
    <>
      {scrollTop ? <ScrollTop /> : ""}

      <Header
        fixed={books.length > 0 ? false : true}
        title={titlePage}
        count={books.length}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {books.length > 0 ? (
            <ul
              className={`transition-all duration-500 ease-in-out grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8`}
            >
              {books.map(
                ({ id, title, author, year }: BookState): JSX.Element => {
                  return (
                    <BookItem
                      key={id}
                      BookId={id}
                      title={title}
                      author={author}
                      year={year}
                    />
                  );
                }
              )}
            </ul>
          ) : (
            <NoData icon="book" title={titlePage} />
          )}
        </>
      )}
    </>
  );
};
