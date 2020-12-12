import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'movie';

interface State {
  entities: string[];
  totalEntities: number;
  error?: string;
  loading: boolean;
}

const initialState: State = {
  entities: ['perkele'],
  totalEntities: 0,
  error: '',
  loading: false,
};

const movieSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    resetMovies: (state) => {
      state.entities = [];
      state.totalEntities = 0;
      state.error = '';
      state.loading = false;
    },
  },
});

export const { resetMovies } = movieSlice.actions;

export default movieSlice.reducer;
