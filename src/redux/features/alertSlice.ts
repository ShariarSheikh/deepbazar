import { PayloadAction, createSlice } from '@reduxjs/toolkit';

//----------------------------------------------
export enum AlertType {
  Info = 'Info',
  Error = 'Error',
  Warning = 'Warning',
  Success = 'Success',
}

export interface AlertState {
  isAlert: boolean;
  message: string;
  type: AlertType;
  isPermanent: boolean;
}

const initialState: AlertState = {
  isAlert: false,
  type: AlertType.Info,
  message: '',
  isPermanent: false,
};

const alertSlice = createSlice({
  name: 'alert slice',
  initialState,

  reducers: {
    showAlert: (
      state,
      action: PayloadAction<{
        message: string;
        type: AlertType;
        isPermanent?: boolean;
      }>
    ) => {
      state.isAlert = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
      if (action.payload?.isPermanent) {
        state.isPermanent = true;
      } else {
        state.isPermanent = false;
      }
    },

    removeAlert: state => {
      state.isAlert = false;
      state.isPermanent = false;
      state.message = '';
    },
  },
});

export const { showAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
