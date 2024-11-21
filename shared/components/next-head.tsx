import Head from "next/head";

export type HeadProps = {
  title: string;
};

const NextHead: React.FC<HeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default NextHead;
