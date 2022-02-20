import { combineReducers } from "redux";
import { bookReducer } from "./book";

export const rootReducer = combineReducers({
  bookReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
