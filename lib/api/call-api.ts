import { handleSingle } from 'redux/slices/cheatSheet';
import client from './client';

export const handleBlogItem = (item) => {
  return { ...item.fields, hero: item.fields?.hero?.fields, id: item.sys.id };
};

export const handleBlogList = (data) => {
  return data.items.map(handleBlogItem);
};

export class CallApi {
  get = async <T>(url: string): Promise<T> => {
    const { data } = await client.get(url);
    return data;
  };
}

const CallApiInstance = new CallApi();
export default CallApiInstance;

export const BlogApi = {
  getSingle: async ({ id }: { id: string }): Promise<any> => {
    const data = await CallApiInstance.get<any>(`blogs/${id}`);
    return handleSingle(data);
  },
  getAll: async (): Promise<any> => {
    const data = await CallApiInstance.get<any>(`blogs`);
    return handleBlogList(data);
  },
};
