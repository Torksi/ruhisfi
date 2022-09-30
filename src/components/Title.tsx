import Head from "next/head";

interface TitleProps {
  title?: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  if (title && title.length > 0) {
    return (
      <Head>
        <title>{`${title.trim()} | Toni Ruhanen`}</title>
      </Head>
    );
  }
  return (
    <Head>
      <title>Toni Ruhanen</title>
    </Head>
  );
};

export default Title;
