import client from './client';
import { Line } from 'src/types/nmap';

export class CallApi {
  get = async <T>(url: string): Promise<T> => {
    const { data } = await client.get(url);
    return data;
  };
}

const CallApiInstance = new CallApi();
export default CallApiInstance;

export const NmapCalls = {
  get: async ({ ip }: { ip: string }): Promise<Line> => {
    return await CallApiInstance.get<Line>(`/api/nmap?ip-address=${ip}`);
  },
};
