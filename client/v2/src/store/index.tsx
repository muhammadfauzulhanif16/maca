import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
// import bookSlice from "./reducers/book";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bookReducer } from "./reducers/book";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
// export const store = configureStore({
//   reducer: {
//     book: bookReducer,
//   },
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
