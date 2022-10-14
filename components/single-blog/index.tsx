import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import { mdToHtml } from 'utils/md-to-html';
import { BlockPostContainer } from 'components/single-blog/blog-post.sc';
import { setActive } from 'redux/slices/blog';
import { PostContent } from 'components/single-blog/blog-post.sc';
import { typeWriter } from 'utils/translator';

type Props = any;

export const BlogPost: FunctionComponent<Props> = ({ blog }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    typeWriter(2, 10);
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(setActive(id as string));
    }
  }, [id]);

  if (!blog) {
    return null;
  }

  const { hero, content } = blog;

  return (
    <BlockPostContainer maxW="90em">
      {hero && <img src={hero?.file.url} title={hero.title} />}
      <h2>{blog.title}</h2>

      <PostContent dangerouslySetInnerHTML={{ __html: mdToHtml(content) }} />
    </BlockPostContainer>
  );
};

export default BlogPost;
