import { createSlice } from "@reduxjs/toolkit";

export const shirtSlice = createSlice({
  name: "shirt",
  initialState: {
    currentShirtId: false,
    currentShirtTitle: "",
    currentShirtImage: "",
  },
  reducers: {
    setCurrentShirtId: (state, action) => {
      const {
        currentShirtId,
        currentShirtTitle,
        currentShirtImage,
      } = action.payload;
      state.currentShirtId = currentShirtId;
      state.currentShirtTitle = currentShirtTitle;
      state.currentShirtImage = currentShirtImage;
    },
  },
});

export const { setCurrentShirtId } = shirtSlice.actions;

export default shirtSlice.reducer;
