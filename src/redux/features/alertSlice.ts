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
  schedule: {
    isSchedule: boolean;
    duration: number;
  };
  message: string;
  type: AlertType;
}

const initialState: AlertState = {
  isAlert: false,
  schedule: {
    isSchedule: false,
    duration: 0,
  },
  type: AlertType.Info,
  message: 'Hello People',
};

const alertSlice = createSlice({
  name: 'alert slice',
  initialState,

  reducers: {
    showAlert: (state, action: PayloadAction<AlertState>) => {
      state.isAlert = true;
      state.message = action.payload.message;
      state.type = action.payload.type;

      if (action.payload?.schedule?.isSchedule) {
        state.schedule = action.payload.schedule;
      }
    },

    removeAlert: state => {
      state.isAlert = false;
      state.schedule.isSchedule = false;
      state.schedule.duration = 0;
      state.message = '';
    },
  },
});

export const { showAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
