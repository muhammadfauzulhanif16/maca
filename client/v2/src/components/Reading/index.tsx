import { Header, Loading, NoData, ScrollTop, Shelf } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { FC, useEffect, useState } from "react";
import { readAllBooksAct } from "../../store/actions/book";

interface ReadingComponentProps {
  titlePage: string;
}

export const ReadingComponent: FC<ReadingComponentProps> = ({ titlePage }) => {
  const dispatch = useDispatch(),
    { books, isLoading } = useSelector(({ book }: RootState) => book),
    [scrollTop, setScrollTop] = useState<boolean>(false),
    scroolHeight = () => {
      window.scrollY >= 32 ? setScrollTop(true) : setScrollTop(false);
    },
    reading = books?.filter(({ is_completed }: any) => {
      return is_completed === true;
    });

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
        fixed={reading.length > 0 ? false : true}
        title={titlePage}
        count={reading.length}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {reading.length > 0 ? (
            <Shelf books={reading} />
          ) : (
            <NoData icon="book" title={titlePage} />
          )}
        </>
      )}
    </>
  );
};

// import { FC } from "react";
// import { Shelf } from "../common";
// import { useSelector } from "react-redux";
// import { RootState } from "../../store";

// interface ReadingComponentProps {
//   titlePage: string;
// }

// export const ReadingComponent: FC<ReadingComponentProps> = ({
//   titlePage,
// }): JSX.Element => {
//   const { books } = useSelector(({ book }: RootState) => book),
//     reading = books.filter(({ is_completed }: any) => {
//       return is_completed === false;
//     });

//   return <Shelf filterBooks={reading} titlePage={titlePage} />;
// };
