import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/* <Image
        src="/public/wallhaven-j817my.jpg"
        width={1920}
        height={200}
        alt="profile"
      /> */}
      <h1>Welcome kusuma</h1>
    </Layout>
  );
};

export default Home;
