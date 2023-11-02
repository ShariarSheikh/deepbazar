import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isOpen: boolean;
  redirectUrl: string;
}

const initialState: InitialState = {
  isOpen: false,
  redirectUrl: '',
};

const loginFirstSlice = createSlice({
  name: 'loginFirst',
  initialState,
  reducers: {
    loginOpenModal: (
      state,
      action: PayloadAction<{ redirectUrl?: string }>
    ) => {
      state.isOpen = true;
      if (action.payload.redirectUrl)
        state.redirectUrl = action.payload.redirectUrl;
      else {
        state.redirectUrl = '';
      }
    },
    loginCloseModal: state => {
      state.isOpen = false;
    },
  },
});

export const { loginOpenModal, loginCloseModal } = loginFirstSlice.actions;

export default loginFirstSlice.reducer;
