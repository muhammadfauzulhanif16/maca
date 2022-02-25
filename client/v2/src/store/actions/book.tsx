import { API } from "../../API";
import { BOOK, BOOKS, LOADING, MESSAGE } from "../types";

export const createBookAct = (payload: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: LOADING.START,
    });

    const { data } = await API({
      data: payload,
      method: "POST",
      url: "/book/create",
    });

    dispatch({
      type: MESSAGE.SUCCESS,
      payload: "Successfully to create a book",
    });

    return dispatch({
      type: BOOK.CREATE,
      payload: { data },
    });
  } catch (e: any) {
    dispatch({
      type: MESSAGE.ERROR,
      payload: "Failed to create a book",
    });

    console.log(e.response);
  }
};

export const readAllBooksAct = () => async (dispatch: any) => {
  try {
    dispatch({
      type: LOADING.START,
    });

    const { data } = await API({
      method: "GET",
      url: "/books/read",
    });

    dispatch({
      type: MESSAGE.SUCCESS,
      payload: "Successfully to show the books",
    });

    return dispatch({
      type: BOOKS.READ,
      payload: data,
    });
  } catch (e: any) {
    dispatch({
      type: MESSAGE.ERROR,
      payload: "Failed to show the books",
    });

    console.log(e.response);
  }
};

export const updateIsCompletedAct = (id: number) => async (dispatch: any) => {
  try {
    dispatch({
      type: LOADING.START,
    });

    const response = await API({
      method: "PUT",
      url: `/book/update/is_completed/${id}`,
    });

    console.log(response);

    dispatch({
      type: MESSAGE.SUCCESS,
      payload: "Successfully to change a book status",
    });

    return dispatch({
      type: BOOK.UPDATE.IS_COMPLETED,
    });
  } catch (e) {
    console.log(e);

    dispatch({
      type: MESSAGE.ERROR,
      payload: "Failed to change a book status",
    });
  }
};

export const deleteBookAct = (id: number) => async (dispatch: any) => {
  try {
    dispatch({
      type: LOADING.START,
    });

    const response = await API({
      method: "DELETE",
      url: `/book/delete/${id}`,
    });

    console.log(response);

    dispatch({
      type: MESSAGE.SUCCESS,
      payload: "Successfully to delete a book",
    });

    return dispatch({
      type: BOOK.DELETE,
    });
  } catch (e) {
    console.log(e);

    dispatch({
      type: MESSAGE.SUCCESS,
      payload: "Failed to delete a book",
    });
  }
};
