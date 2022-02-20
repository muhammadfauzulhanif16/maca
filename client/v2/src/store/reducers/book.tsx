// import { BOOK } from "../types";
// import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { RootState } from "../../store";
// import { API } from "../../API";
import { BOOK, BOOKS } from "../types";
import { LOADING } from "../types";

// export const createBookAct = createAsyncThunk(
//   "book/create",
//   async (payload: any) => {
//     const { data } = await API({
//       data: payload,
//       method: "POST",
//       url: "/book/create",
//     });

//     return data;
//   }
// );

// export const readAllBooksAct = createAsyncThunk("book/read", async () => {
//   const { data } = await API({
//     method: "GET",
//     url: "/books",
//   });

//   return data;
// });

interface BookState {
  isLoading: boolean;
  // book: {};
  books: [];
  isCompleted: string;
}

const initialState: BookState = {
  isLoading: false,
  // book: {},
  books: [],
  isCompleted: "",
};

export const bookReducer = (state = initialState, action: any) => {
  // console.log("state", state);
  // console.log("action value", action);

  switch (action.type) {
    case LOADING.START:
      return {
        ...state,
        isLoading: true,
      };
    // case BOOK.CREATE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     book: action.payload,
    //   };
    case BOOKS.READ:
      return {
        ...state,
        isLoading: false,
        books: action.payload,
      };
    case BOOK.UPDATE.IS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        isCompleted: "Berhasil ubah status",
      };
    case BOOK.DELETE:
      return {
        ...state,
        isLoading: false,
      };
    case LOADING.STOP:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

// export const bookSlice = createSlice({
//   name: "book",
//   initialState,
//   reducers: {
//     create: (state, { payload }: PayloadAction<object>) => {
//       state.book = payload;
//       console.log(payload);
//     },
//     readAll: (state, { payload }: PayloadAction<[]>) => {
//       state.books = payload;
//       console.log(payload);
//     },
//   },
// });

// export const { create, readAll } = bookSlice.actions;
// export const createBook = ({ book }: RootState) => book.book;
// export const readAllBooks = ({ book }: RootState) => book.books;
// export default bookSlice.reducer;
