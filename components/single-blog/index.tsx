import { FunctionComponent, useState } from 'react';
import { mdToHtml } from 'utils/md-to-html';
import { BlockPostContainer } from 'components/single-blog/blog-post.sc';
import { PostContent } from 'components/single-blog/blog-post.sc';
import axios from 'axios';
import Head from 'components/head';
type Props = any;

export const BlogPost: FunctionComponent<Props> = ({ blog, error, id }) => {
  const [post, setPost] = useState(blog);
  const [password, setPassword] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  // Use blog here so refetch doesnt trigger meta tags
  const title = blog?.title || 'Restricted page';
  const description = blog?.title ? `Solving ${title} ` : 'My CTF writeups and Cyber stuff';

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    try {
      const { data } = await axios.post('/api/blogs/' + id, { password, id });
      setPost(data);
    } catch (err) {
      const message = err?.response?.data?.message;
      setSubmitError(message);
    }
    setPassword(null);
  };

  // Password protected
  if (error?.code === 401 && !post) {
    return (
      <BlockPostContainer maxW="90em">
        <Head title={title} description={description} />
        <h2>{error.message}</h2>
        <PostContent>
          <div style={{ textAlign: 'center' }}>
            <p>This post is password protected. Please enter the password to view the post.</p>
            <p>Note: the password is not brute forceable</p>
            {submitError && <p style={{ color: 'red' }}>{submitError}</p>}
            <form onSubmit={(e) => submitForm(e)}>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                placeholder="Password"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </PostContent>
      </BlockPostContainer>
    );
  }
  if (!post) {
    return null;
  }

  const { hero, content } = post;

  return (
    <div>
      <Head title={title} description={description} />
      <BlockPostContainer maxW="90em">
        {false && <img src={hero?.file?.url} title={hero.title} />}
        <h2>{post.title}</h2>

        <PostContent dangerouslySetInnerHTML={{ __html: mdToHtml(content) }} />
      </BlockPostContainer>
    </div>
  );
};

export default BlogPost;
