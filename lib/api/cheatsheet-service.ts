import { client } from 'lib/api/contentful-client';

export type CheatSheet = any;

export type CheatSheetResponse = any;

export const handleSingle = (item: CheatSheetResponse): CheatSheet => {
  return { ...item.fields, id: item.sys.id };
};

export const handleAll = (data: CheatSheetResponse): CheatSheet[] => {
  return data.items.map(handleSingle);
};

export const getAll = async (): Promise<CheatSheet[]> => {
  const entries = await client.getEntries({ content_type: 'cheatsheet' });
  const data = handleAll(entries);
  return data;
};
