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
  totalQuantity: number;
  totalAmount: number;
  shippingFee: number;
  subtotal: number;
}

const data =
  typeof window !== 'undefined' && localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems') || '')
    : [];

const cartInfo =
  typeof window !== 'undefined' && localStorage.getItem('cartInfo')
    ? JSON.parse(localStorage.getItem('cartInfo') || '')
    : {
        totalAmount: 0,
        totalQuantity: 0,
        subtotal: 0,
      };

//----------------------------------------------
const getTotals = (state: CartState) => {
  const { totalAmount, quantity, shippingFee } = state.cartItems.reduce(
    (cartTotal, cartItem) => {
      const { price, cartQuantity, discountPrice } = cartItem;

      const currentPrice = discountPrice > 0 ? discountPrice : price;

      const itemTotalAmount = currentPrice * cartQuantity;

      cartTotal.totalAmount += itemTotalAmount;
      cartTotal.quantity += cartQuantity;

      return cartTotal;
    },
    {
      totalAmount: 0,
      quantity: 0,
      shippingFee: 5,
    }
  );

  state.totalQuantity = quantity;
  state.subtotal = Number(totalAmount.toFixed(2));
  state.totalAmount = Number((totalAmount + shippingFee).toFixed(2));

  localStorage.setItem(
    'cartInfo',
    JSON.stringify({
      totalAmount: state.totalAmount,
      totalQuantity: state.totalQuantity,
      subtotal: state.subtotal,
    })
  );
};

// MAIN
const initialState: CartState = {
  isShowCart: false,
  cartItems: data,
  totalQuantity: cartInfo.totalQuantity,
  totalAmount: cartInfo.totalAmount,
  subtotal: cartInfo.subtotal,
  shippingFee: 5,
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
