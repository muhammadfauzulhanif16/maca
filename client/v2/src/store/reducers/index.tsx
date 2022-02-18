import { combineReducers } from "redux";
import { bookReducer } from "./book";

export const rootReducer = combineReducers({
  book: bookReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
