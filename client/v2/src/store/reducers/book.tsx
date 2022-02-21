import { BOOK, BOOKS, MESSAGE } from "../types";
import { LOADING } from "../types";

interface BookState {
  isLoading: boolean;
  book: object;
  books: object[];
  success: string;
  error: string;
}

const initialState: BookState = {
  isLoading: false,
  book: {},
  books: [],
  success: "",
  error: "",
};

export const bookReducer = (state = initialState, { type, payload }: any) => {
  console.log("payload", payload);

  switch (type) {
    case LOADING.START:
      return {
        ...state,
        isLoading: true,
      };
    case BOOK.CREATE:
      return {
        ...state,
        isLoading: false,
        book: payload,
      };
    case BOOKS.READ:
      return {
        ...state,
        isLoading: false,
        books: payload,
      };
    case BOOK.UPDATE.IS_COMPLETED:
      return {
        ...state,
        isLoading: false,
      };
    case BOOK.DELETE:
      return {
        ...state,
        isLoading: false,
      };
    case MESSAGE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload,
      };
    case MESSAGE.ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
