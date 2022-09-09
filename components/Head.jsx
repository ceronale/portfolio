import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Alexander Ceron "
      />
      <meta
        name="keywords"
        content="Alexander Ceron, portfolio"
      />
      <meta property="og:title" content="Alexader Ceron's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Alexander Ceron',
};
