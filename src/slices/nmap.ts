import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'src/store';
import { NmapCalls } from 'src/api/call-api';
import { State, Line } from 'src/types/nmap';

const sliceName = 'nmap';

const initialState: State = {
  lines: [],
  error: '',
  loading: false,
};

const nmapSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Line>) => {
      console.log(action);
      state.lines.push(action.payload);
    },
  },
});

export const { addMessage } = nmapSlice.actions;

export const getNmap = ({ ip }: { ip: string }): AppThunk => async (dispatch) => {
  try {
    console.log('mitä vittua', ip);
    const data = await NmapCalls.get({ ip });
    dispatch(addMessage(data));
  } catch (err) {
    console.log(err);
  }
};

export default nmapSlice.reducer;
