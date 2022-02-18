import { Header, Loading, NoData, ScrollTop, Shelf } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { FC, useEffect, useState } from "react";
import { readAllBooksAct } from "../../store/actions/book";

interface FinishedComponentProps {
  titlePage: string;
}

export const FinishedComponent: FC<FinishedComponentProps> = ({
  titlePage,
}) => {
  const dispatch = useDispatch(),
    { books, isLoading } = useSelector(({ book }: RootState) => book),
    [scrollTop, setScrollTop] = useState<boolean>(false),
    scroolHeight = () => {
      window.scrollY >= 32 ? setScrollTop(true) : setScrollTop(false);
    },
    finished = books?.filter(({ is_completed }: any) => {
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
        fixed={finished.length > 0 ? false : true}
        title={titlePage}
        count={finished.length}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {finished.length > 0 ? (
            <Shelf books={finished} />
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

// interface FinishedComponentProps {
//   titlePage: string;
// }

// export const FinishedComponent: FC<FinishedComponentProps> = ({
//   titlePage,
// }): JSX.Element => {
//   const { books } = useSelector(({ book }: RootState) => book),
//     finished = books.filter(({ is_completed }: any) => {
//       return is_completed === true;
//     });

//   return <Shelf filterBooks={finished} titlePage={titlePage} />;
// };
