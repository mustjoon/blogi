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

interface BlogError {
  code: number;
  message: string;
}

export const handleBlogItem = (item: BlogResponse): Blog => {
  delete item.fields.password;
  return { ...item.fields, hero: item.fields?.hero?.fields, id: item.sys.id };
};

export const handleBlogList = (data: BlogListResponse): StrippedBlog[] => {
  return data.items.map((item) => {
    return {
      hero: item.fields?.hero?.fields,
      id: item.sys.id,
      teaser: item.fields.teaser,
      title: item.fields.title,
      passwordProtected: item.fields.password ? true : false,
    };
  });
};

export const getBlogs = async (): Promise<StrippedBlog[]> => {
  const entries = ((await client.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
  })) as unknown) as BlogListResponse;

  const data = handleBlogList(entries);
  return data;
};

export const getBlog = async (id: string, password?: string): Promise<Blog> => {
  const entry = ((await client.getEntry(id)) as unknown) as BlogResponse;
  const entryPwd = entry.fields.password;

  if (entryPwd && password !== entryPwd) {
    return Promise.reject({ code: 401, message: 'Unauthorized' } as BlogError);
  }

  const data = handleBlogItem(entry);
  return data;
};
