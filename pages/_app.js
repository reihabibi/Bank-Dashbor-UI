import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/user/")) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
