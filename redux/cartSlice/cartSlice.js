import { createSlice } from "@reduxjs/toolkit";

const getTotals = (state) => {
  let { total, quantity } = state.cartItems.reduce(
    (cartTotal, cartItem) => {
      const { price, cartQuantity } = cartItem;
      const itemTotal = price * cartQuantity;

      cartTotal.total += itemTotal;
      cartTotal.quantity += cartQuantity;

      return cartTotal;
    },
    {
      total: 0,
      quantity: 0,
    }
  );

  state.cartTotalQuantity = quantity;
  state.cartTotalAmount = total;

  //store in local storage
  localStorage.setItem("totalAmount", JSON.stringify(state.cartTotalAmount));
  localStorage.setItem(
    "totalQuantity",
    JSON.stringify(state.cartTotalQuantity)
  );
};

let data =
  typeof window !== "undefined" && localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

let totalAmount =
  typeof window !== "undefined" && localStorage.getItem("totalAmount")
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

let totalQuantity =
  typeof window !== "undefined" && localStorage.getItem("totalQuantity")
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: data,
    cartTotalQuantity: totalQuantity,
    cartTotalAmount: totalAmount,
    openCartSidebar: false,
  },

  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.data.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += Number(
          action.payload.quantity
        );
      } else {
        const tempProduct = {
          ...action.payload.data,
          cartQuantity: Number(action.payload.quantity),
        };
        state.cartItems.push(tempProduct);
      }

      //store in local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      getTotals(state);
    },

    removeItem: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (x) => x.id !== action.payload.id
      );

      state.cartItems = nextCartItems;

      //store in local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      getTotals(state);
    },

    decreaseCartItems: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (x) => x.id === action.payload.data.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= action.payload.quantity;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (x) => x.id !== action.payload.data.id
        );
      }

      //store in local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      getTotals(state);
    },

    clearCartItems: (state, action) => {
      state.cartItems = [];

      //store in local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      getTotals(state);
    },

    openCart: (state, action) => {
      state.openCartSidebar = !state.openCartSidebar;
    },
  },
});

export const {
  addToCart,
  clearCartItems,
  removeItem,
  openCart,
  decreaseCartItems,
} = cartSlice.actions;

export const getCart = (state) => state.getCart;

export default cartSlice.reducer;
