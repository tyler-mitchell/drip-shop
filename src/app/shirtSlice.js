import { createSlice } from "@reduxjs/toolkit";

export const shirtSlice = createSlice({
  name: "shirt",
  initialState: {
    currentShirtId: false,
    currentShirtTitle: "",
    currentShirtImage: "",
    currentShirtPrice: "",
  },
  reducers: {
    setCurrentShirtId: (state, action) => {
      const {
        currentShirtId,
        currentShirtTitle,
        currentShirtImage,
        currentShirtPrice,
      } = action.payload;
      state.currentShirtId = currentShirtId;
      state.currentShirtTitle = currentShirtTitle;
      state.currentShirtImage = currentShirtImage;
      state.currentShirtPrice = currentShirtPrice;
    },
  },
});

export const { setCurrentShirtId } = shirtSlice.actions;

export default shirtSlice.reducer;
