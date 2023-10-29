import { PayloadAction, createSlice } from '@reduxjs/toolkit';

//----------------------------------------------
export interface CartDataTypes {
  title: string;
  imgUrl: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  productId: string;
}

export interface CartData extends CartDataTypes {
  cartQuantity: number;
}

interface CartState {
  isShowCart: boolean;
  cartItems: CartData[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}
//----------------------------------------------
const getTotals = (state: CartState) => {
  const { total, quantity } = state.cartItems.reduce(
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
  state.cartTotalAmount = Number(total.toFixed(2));

  //store in local storage
  localStorage.setItem('totalAmount', JSON.stringify(state.cartTotalAmount));
  localStorage.setItem(
    'totalQuantity',
    JSON.stringify(state.cartTotalQuantity)
  );
};

const data =
  typeof window !== 'undefined' && localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems') || '')
    : [];

const totalAmount =
  typeof window !== 'undefined' && localStorage.getItem('totalAmount')
    ? JSON.parse(localStorage.getItem('totalAmount') || '')
    : 0;

const totalQuantity =
  typeof window !== 'undefined' && localStorage.getItem('totalQuantity')
    ? JSON.parse(localStorage.getItem('totalQuantity') || '')
    : 0;

// MAIN
const initialState: CartState = {
  isShowCart: false,
  cartItems: data,
  cartTotalQuantity: totalQuantity,
  cartTotalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: 'cart slice',
  initialState,

  reducers: {
    showCartHandler: state => {
      state.isShowCart = !state.isShowCart;
    },

    addToCart: (
      state,
      action: PayloadAction<{ data: CartDataTypes; quantity: number }>
    ) => {
      const itemIndex = state.cartItems.findIndex(
        item => item.productId === action.payload.data.productId
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
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      getTotals(state);
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      const newCartItems = state.cartItems.filter(
        item => item.productId !== action.payload.id
      );

      state.cartItems = newCartItems;

      //store in local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      getTotals(state);
    },

    decreaseCartItems: (
      state,
      action: PayloadAction<{ data: CartDataTypes; quantity: number }>
    ) => {
      const itemIndex = state.cartItems.findIndex(
        item => item.productId === action.payload.data.productId
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= action.payload.quantity;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          item => item.productId !== action.payload.data.productId
        );
      }

      //store in local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      getTotals(state);
    },

    clearCartItems: state => {
      state.cartItems = [];

      //store in local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      getTotals(state);
    },
  },
});

export const {
  showCartHandler,
  addToCart,
  removeItem,
  clearCartItems,
  decreaseCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
