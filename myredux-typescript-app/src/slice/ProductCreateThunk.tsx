import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getproducts = createAsyncThunk(
  "product/fetch",
  async (productID: number) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productID}` // <-- fix here
    );
    return response.data;
  }
);
