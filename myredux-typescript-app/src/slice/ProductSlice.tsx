import { createSlice } from "@reduxjs/toolkit";
import { getproducts } from "./ProductCreateThunk";

type productDetails = {
  id: number;
  title: string;
  price: number;
  stock: number;
  category: string;
  rating: number;
  thumbnail: string;
};

interface ProductState {
  product: productDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getproducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getproducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch product";
      });
  },
});

export default productSlice.reducer;
