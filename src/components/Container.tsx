import Head from "next/head";
import META_DATA from "../data/META_DATA";

const Container = (props) => {
  return (
    <>
      <Head>
        <title>{META_DATA.title}</title>
      </Head>
      <header></header>
      <main>{props.children}</main>
    </>
  );
};

export default Container;
