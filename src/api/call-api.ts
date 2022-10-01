import client from './client';

export class CallApi {
  get = async <T>(url: string): Promise<T> => {
    const { data } = await client.get(url);
    return data;
  };
}

const CallApiInstance = new CallApi();
export default CallApiInstance;

export const BlogCalls = {
  getSingle: async ({ id }: { id: string }): Promise<any> => {
    return await CallApiInstance.get<any>(`blog/${id}`);
  },
  getAll: async (): Promise<any> => {
    return await CallApiInstance.get<any>(`blog`);
  },
};
