import { FunctionComponent } from 'react';
import CheatSheet from 'components/cheatsheet/index';
import { GetStaticProps } from 'next';
import { getAll } from 'lib/api/cheatsheet-service';

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAll();
  return {
    props: {
      cheatsheets: data,
    },
    revalidate: 30,
  };
};

export const IndexPage: FunctionComponent<any> = (props) => <CheatSheet {...props} />;

export default IndexPage;
