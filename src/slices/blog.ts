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

type ActiveAction = string;

const blogSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    resetBlog: (state) => {
      state.allIds = [];
      state.byId = {};
      state.totalEntities = 0;
      state.error = '';
      state.loading = false;
      state.activeId = undefined;
    },
    setBlogs: (state, action: PayloadAction<BlogPosstParams>) => {
      const { items } = action.payload;
      state.allIds = [];
      state.byId = {};
      items.forEach((item) => {
        state.allIds.push(item.id);
        state.byId[item.id] = item;
      });
    },
    setBlog: (state, action: PayloadAction<BlogPost>) => {
      state.allIds.push(action.payload.id);
      state.byId[action.payload.id] = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setActive: (state, action: PayloadAction<ActiveAction>) => {
      state.activeId = action.payload;
    },
  },
});

export const { setBlogs, setLoading, setActive, setBlog } = blogSlice.actions;

export const handleBlogItem = (item): BlogPost => {
  return { ...item.fields, hero: item.fields?.hero?.fields, id: item.sys.id };
};

export const handleBlogList = (data: BlogPostResponse): BlogPost[] => {
  return data.items.map(handleBlogItem);
};

export const getBlogList = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const data = ((await client.getEntries({ content_type: 'blogPost' })) as unknown) as BlogPost[];

    dispatch(setBlogs({ items: data }));
  } catch (err) {
  } finally {
    dispatch(setLoading(false));
  }
};

export const getSingleBlog = (id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const data = ((await client.getEntry(id)) as unknown) as BlogPost;

    dispatch(setBlog(data));
  } catch (err) {
  } finally {
    dispatch(setLoading(false));
  }
};

export const { resetBlog } = blogSlice.actions;

export default blogSlice.reducer;
