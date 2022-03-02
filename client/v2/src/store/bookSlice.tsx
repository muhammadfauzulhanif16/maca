import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../API";

export const createBook = createAsyncThunk(
  "book/create",
  async (payload: any) => {
    const { data } = await API({
      data: payload,
      method: "POST",
      url: "/book/create",
    });

    return data;
  }
);
