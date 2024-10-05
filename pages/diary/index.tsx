import { FunctionComponent } from 'react';
import ListComponent from 'components/diary/index';
import { GetStaticProps } from 'next';
import { getDiaries } from 'lib/api/diary-service';

export const getStaticProps: GetStaticProps = async () => {
  const data = await getDiaries();

  return {
    props: {
      diaries: data,
    },
    revalidate: 30,
  };
};

export const IndexPage: FunctionComponent<any> = (props) => <ListComponent {...props} />;

export default IndexPage;
