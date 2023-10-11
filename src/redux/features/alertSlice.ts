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
}

const initialState: AlertState = {
  isAlert: false,
  type: AlertType.Info,
  message: 'Hello People',
};

const alertSlice = createSlice({
  name: 'alert slice',
  initialState,

  reducers: {
    showAlert: (
      state,
      action: PayloadAction<{ message: string; type: AlertType }>
    ) => {
      state.isAlert = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },

    removeAlert: state => {
      state.isAlert = false;
      state.message = '';
    },
  },
});

export const { showAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;