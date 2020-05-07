import { createSlice } from "@reduxjs/toolkit";

export const shirtSlice = createSlice({
  name: "shirt",
  initialState: {
    currentShirtId: false,
    currentShirtTitle: "",
    currentShirtImage: "",
    currentShirtPrice: "",
    currentShirtQuantity: "",
    currentShirtColor: "black",
    cartOpen: false,

    cart: [],
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
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    addToCart: (state, action) => {
      const { size, color } = action.payload;
      let index = false;
      if (
        !state.cart.some((e, i) => {
          const cond = e?.shirtId === state.currentShirtId;
          index = cond ? i : false;
          return cond;
        })
      ) {
        state.cart.push({
          shirtId: state.currentShirtId,
          title: state.currentShirtTitle,
          image: state.currentShirtImage,
          price: state.currentShirtPrice,
          quantity: state.currentShirtQuantity,
          color: color,
          size: size,
        });
      } else {
        if (index >= 0) {
          state.cart.splice(index, 1);
        }
      }
    },
  },
});

export const { setCurrentShirtId, addToCart, toggleCart } = shirtSlice.actions;

export default shirtSlice.reducer;
