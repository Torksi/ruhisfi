import Head from "next/head";

interface TitleProps {
  pageName: string;
}

const Title: React.FC<TitleProps> = ({ pageName }) => {
  return (
    <Head>
      <title>Ruhis - {pageName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default Title;
