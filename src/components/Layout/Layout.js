import styles from './Layout.module.css';
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from 'next/head'

function Layout(props) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Your Getaway Panama City, Florida"
        />

        <link rel="manifest" href="manifest.json" />

        <title>The Hideaway Panamacity</title>
      </Head>

      <main className={styles.wrapper}>
        <Nav>
        </Nav>
        <Header>
        </Header>
        <div className={styles["main-content"]}>
          {props.children}
        </div>
        <Footer>
        </Footer>
      </main>
    </>
  );
}

export default Layout;
