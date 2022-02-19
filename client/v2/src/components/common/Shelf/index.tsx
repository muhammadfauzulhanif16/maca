import { FC } from "react";
import { BookItem } from "../BookItem";

interface ShelfProps {
  books: any;
}

interface BookState {
  title: string;
  author: string;
  year: string;
}

export const Shelf: FC<ShelfProps> = ({ books }): JSX.Element => {
  return (
    <ul
      className={`transition-all duration-500 ease-in-out grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8`}
    >
      {books.map(
        ({ title, author, year }: BookState, id: number): JSX.Element => (
          <BookItem key={id} title={title} author={author} year={year} />
        )
      )}
    </ul>
  );
};

// import { FC, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../store";
// import { readAllBooksAct } from "../../../store/actions/book";
// import { BookItem } from "../BookItem";
// import { Header } from "../Header";
// import { Loading } from "../Loading";
// import { NoData } from "../NoData";
// import { ScrollTop } from "../ScrollTop";

// interface ShelfProps {
//   titlePage?: any;
//   filterBooks?: any;
// }

// interface BookState {
//   title: string;
//   author: string;
//   year: string;
// }

// export const Shelf: FC<ShelfProps> = ({ titlePage, filterBooks }) => {
//   const dispatch = useDispatch(),
//     { isLoading } = useSelector(({ book }: RootState) => book),
//     [scrollTop, setScrollTop] = useState(false),
//     scroolHeight = () => {
//       window.scrollY >= 32 ? setScrollTop(true) : setScrollTop(false);
//     };

//   window.addEventListener("scroll", scroolHeight);

//   useEffect(() => {
//     dispatch(readAllBooksAct());
//     scroolHeight();
//     return () => setScrollTop(false);
//   }, [dispatch]);

//   return (
//     <>
//       {scrollTop ? <ScrollTop /> : ""}

//       <Header
//         fixed={filterBooks.length > 0 ? false : true}
//         title={titlePage}
//         count={filterBooks.length}
//       />

//       {isLoading ? (
//         <Loading />
//       ) : (
//         <>
//           {filterBooks.length > 0 ? (
//             <ul
//               className={`transition-all duration-500 ease-in-out grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8`}
//             >
//               {filterBooks.map(
//                 ({ title, author, year }: BookState, id: number) => (
//                   <BookItem
//                     key={id}
//                     title={title}
//                     author={author}
//                     year={year}
//                   />
//                 )
//               )}
//             </ul>
//           ) : (
//             <NoData icon="book" title={titlePage} />
//           )}
//         </>
//       )}
//     </>
//   );
// };
