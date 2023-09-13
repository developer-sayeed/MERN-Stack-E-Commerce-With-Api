import { createSlice } from "@reduxjs/toolkit";

// Create a user Slice

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    brand: null,
    category: null,
    tag: null,
    error: null,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {},
});

// Selectors

// Actions
export const { setMessageEmpty } = productSlice.actions;

// Export

export default productSlice.reducer;
