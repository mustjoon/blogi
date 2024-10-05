import { client } from 'lib/api/contentful-client';

interface Hero {
  description: string;
  file: {
    url: string;
    details: {
      size: number;
      image?: {
        width: number;
        height: number;
      };
    };
  };
  title: string;
}

interface HeroResponse {
  fields: Hero;
}

export interface Blog {
  content: string;
  hero: Hero;
  id: string;
  teaser: string;
  title: string;
}

export interface BlogResponse {
  fields: Blog & { password?: string; hero?: HeroResponse };
  sys: any;
}

export interface BlogListResponse {
  items: BlogResponse[];
}

export interface StrippedBlog {
  id: string;
  teaser: string;
  hero: Hero;
  passwordProtected?: boolean;
}

export type CheatSheet = any;

export type CheatSheetResponse = any;

export const handleSingle = (item: CheatSheetResponse): CheatSheet => {
  return { ...item.fields, id: item.sys.id };
};

export const handleAll = (data: CheatSheetResponse): CheatSheet[] => {
  return data.items.map(handleSingle);
};

export const getDiaries = async (): Promise<StrippedBlog[]> => {
  const entries = (await client.getEntries({
    content_type: 'cyberLearningDaily',
    order: '-sys.createdAt',
  })) as unknown as BlogListResponse;

  const data = handleAll(entries);
  return data;
};
