import Layout from '../components/Layout/Layout';
import './styles.css'
import './elevation.css'

function App({ Component, pageProps }) {
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
  );
}

export default App;
