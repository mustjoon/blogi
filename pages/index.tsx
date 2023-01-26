export async function getServerSideProps({ query }): Promise<any> {
  return {
    redirect: {
      permament: false,
      destination: '/blog',
    },
  };
}

export default function Nuller(): null {
  return null;
}
