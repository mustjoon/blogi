import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { client } from 'src/api/contentful-client';
import { AppThunk } from 'src/store';

const sliceName = 'blog';
interface ById {
  [key: string]: BlogPost;
}
interface State {
  allIds: string[];
  byId: ById;
  totalEntities: number;
  error?: string;
  loading: boolean;
  activeId?: string;
}

const initialState: State = {
  allIds: [],
  byId: {},
  totalEntities: 0,
  error: '',
  loading: false,
  activeId: undefined,
};

export type BlogPost = any;

type BlogPosstParams = {
  items: BlogPost[];
};

type BlogPostResponse = any;

const blogSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    reset: (state) => {
      state.allIds = [];
      state.byId = {};
      state.totalEntities = 0;
      state.error = '';
      state.loading = false;
      state.activeId = undefined;
    },
    set: (state, action: PayloadAction<BlogPosstParams>) => {
      const { items } = action.payload;
      state.allIds = [];
      state.byId = {};
      items.forEach((item) => {
        state.allIds.push(item.id);
        state.byId[item.id] = item;
      });
    },
    setSingle: (state, action: PayloadAction<BlogPost>) => {
      state.allIds.push(action.payload.id);
      state.byId[action.payload.id] = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { reset, set, setSingle, setLoading } = blogSlice.actions;

export const handleSingle = (item): BlogPost => {
  return { ...item.fields, id: item.sys.id };
};

export const handleAll = (data: BlogPostResponse): BlogPost[] => {
  return data.items.map(handleSingle);
};

export const getAll = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await client.getEntries({ content_type: 'cheatsheet' });

    const handledData = handleAll(data);
    dispatch(set({ items: handledData }));
  } catch (err) {
  } finally {
    dispatch(setLoading(false));
  }
};

export default blogSlice.reducer;
