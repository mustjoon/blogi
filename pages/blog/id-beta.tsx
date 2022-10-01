/*
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { resetBlog } from 'src/slices/blog';
import { mdToHtml } from 'src/utils/md-to-html';
import { RootState } from 'src/root-reducer';
import { setActive, getSingleBlog } from 'src/slices/blog';
import { BlockPostContainer, PostContent } from 'src/components/blog-post.sc';

import Typed from 'typed.js/src/typed';

const ALPHABETH = 'ㄱㄴㄷㄹㅁㅂㅅㅐㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ';

function getCharCount(html) {
  const initial = mdToHtml(html);
  const tempHTML = document?.createElement('div');
  tempHTML.innerHTML = initial;
  const elements = Array.from(tempHTML.getElementsByTagName('*'));
  let count = 0;
  elements.forEach((item) => {
    const txt = item.textContent;
    count += txt?.length || 0;
    console.log(txt);
  });

  return count;
}

let tempSTring = '';
for (let i = 0; i < 9000; i++) {
  const random = Math.floor(Math.random() * ALPHABETH.length - 1);
  tempSTring += ALPHABETH[random - 1];
}

export const BlogPost: FunctionComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [inited, setInited] = useState(false);
  const [ready, isReady] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(getSingleBlog(id as string));
      dispatch(setActive(id as string));
    }
  }, [id]);

  const currentEntity = useSelector((state: RootState) => state.blog.byId[state.blog.activeId]);
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    if (currentEntity && !inited) {
      console.log(currentEntity);
      setInited(true);
    }
  }, [currentEntity]);

  useEffect(() => {
    if (inited) {
      const html = mdToHtml(currentEntity.content);
      console.log(html);
      const options = {
        strings: [tempSTring, html],
        typeSpeed: -5,
        backSpeed: -5,
      };

      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);

      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      };
    }
  }, [inited]);
  /*
  useEffect(() => {
    if (!currentEntity?.content) {
      return;
    }

    const setTime = setInterval(countUp, 1000);
    const html = mdToHtml(currentEntity.content);
    const charCount = getCharCount(html);

    // should take 2 seconds to complete, 20ms break between 
    const 

    console.log({ charCount });

    function countUp() {
      // generateText();
    }
  }, [currentEntity?.content]);

  // ToDo: maybe make this more performant in some way
  const generateText = () => {
    const initial = mdToHtml(currentEntity.content);
    const tempHTML = document?.createElement('div');
    tempHTML.innerHTML = initial;
    const elements = Array.from(tempHTML.getElementsByTagName('*'));
    console.log(elements);
    elements.forEach((el) => {
      console.log(el);
    });
    // console.log(tempHTML);
    return tempHTML;
  };
  

  return (
    <BlockPostContainer maxW="90em">
      {currentEntity?.hero && <img src={currentEntity.hero?.file.url} title={currentEntity.hero.title} />}
      <h2>{currentEntity?.title}</h2>

      <div id="VITTU" ref={el} />
    </BlockPostContainer>
  );
};

export default BlogPost;
*/
