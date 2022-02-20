import { API } from "../../API";
import { BOOK, BOOKS } from "../types";

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
      url: "/books/read",
    });

    return dispatch({
      type: BOOKS.READ,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateIsCompletedAct = (id: number) => async (dispatch: any) => {
  try {
    const response = await API({
      method: "PUT",
      url: `/book/update/is_completed/${id}`,
    });

    console.log("updateIsCompletedAct", response);

    return dispatch({
      type: BOOK.UPDATE.IS_COMPLETED,
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteBookAct = (id: number) => async (dispatch: any) => {
  try {
    const response = await API({
      method: "DELETE",
      url: `/book/delete/${id}`,
    });

    console.log("deleteBookAct", response);

    return dispatch({
      type: BOOK.DELETE,
    });
  } catch (e) {
    console.log(e);
  }
};
