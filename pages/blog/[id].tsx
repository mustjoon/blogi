import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import { resetBlog } from 'src/slices/blog';
import { mdToHtml } from 'src/utils/md-to-html';
import { RootState } from 'src/root-reducer';
import { setActive, getSingleBlog } from 'src/slices/blog';
import { BlockPostContainer, PostContent } from 'src/components/blog-post.sc';
import { BlogCalls } from 'src/api/call-api';

export async function getStaticPaths(): Promise<any> {
  const blogs = await BlogCalls.getAll();
  const paths = blogs.map(({ id }) => {
    return {
      params: { id },
    };
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params: { id } }): Promise<any> {
  let data = null;
  try {
    data = await BlogCalls.getSingle({ id });
  } catch (err) {
    console.log('Failed to fetch single blog');
  }

  return {
    props: {
      blog: data,
    },
    revalidate: 120,
  };
}

export const BlogPost: FunctionComponent<any> = ({ blog }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      // dispatch(getSingleBlog(id as string));
      dispatch(setActive(id as string));
    }
  }, [id]);
  const currentEntity = blog;
  //const currentEntity = useSelector((state: RootState) => state.blog.byId[state.blog.activeId]);

  if (!currentEntity) {
    return null;
  }

  return (
    <BlockPostContainer maxW="90em">
      {currentEntity.hero && <img src={currentEntity.hero?.file.url} title={currentEntity.hero.title} />}
      <h2>{currentEntity.title}</h2>

      <PostContent dangerouslySetInnerHTML={{ __html: mdToHtml(currentEntity.content) }} />
    </BlockPostContainer>
  );
};

export default BlogPost;
