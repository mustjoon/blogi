import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import { resetBlog } from 'src/slices/blog';
import { mdToHtml } from 'src/utils/md-to-html';
import { RootState } from 'src/root-reducer';
import { setActive, getSingleBlog } from 'src/slices/blog';
import { BlockPostContainer, PostContent } from 'src/components/blog-post.sc';

export const BlogPost: FunctionComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      dispatch(getSingleBlog(id as string));
      dispatch(setActive(id as string));
    }
  }, [id]);

  const currentEntity = useSelector((state: RootState) => state.blog.byId[state.blog.activeId]);

  if (!currentEntity) {
    return null;
  }

  return (
    <BlockPostContainer maxW="90em">
      <img src={currentEntity.hero.file.url} title={currentEntity.hero.title} />
      <h2>{currentEntity.title}</h2>

      <PostContent dangerouslySetInnerHTML={{ __html: mdToHtml(currentEntity.content) }} />
    </BlockPostContainer>
  );
};

export default BlogPost;
