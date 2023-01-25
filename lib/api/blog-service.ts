import { client } from 'lib/api/contentful-client';

export interface Blog {
  content: string;
  hero: any;
  id: string;
  teaser: string;
  title: string;
}

export interface BlogResponse {
  fields: Blog;
  sys: any;
}

export interface BlogListResponse {
  items: BlogResponse[];
}

export interface StrippedBlog {
  id: string;
  teaser: string;
  hero: any;
}

export const handleBlogItem = (item: BlogResponse): Blog => {
  return { ...item.fields, hero: item.fields?.hero?.fields, id: item.sys.id };
};

export const handleBlogList = (data: BlogListResponse): StrippedBlog[] => {
  return data.items.map((item) => {
    return { hero: item.fields?.hero?.fields, id: item.sys.id, teaser: item.fields.teaser, title: item.fields.title };
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

export const getBlog = async (id: string): Promise<Blog> => {
  const entry = ((await client.getEntry(id)) as unknown) as BlogResponse;
  const data = handleBlogItem(entry);
  return data;
};
