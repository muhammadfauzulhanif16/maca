import { API } from "../../API";
import { BOOK } from "../types";

export const createBookAct = (payload: any) => async (dispatch: any) => {
  try {
    const { data } = await API({
      data: payload,
      method: "POST",
      url: "/book/create",
    });

    return dispatch({
      type: BOOK.CREATE,
      payload: { data },
    });
  } catch (e) {
    console.log(e);
  }
};

export const readAllBooksAct = () => async (dispatch: any) => {
  try {
    const { data } = await API({
      method: "GET",
      url: "/books",
    });

    return dispatch({
      type: BOOK.READ,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};
