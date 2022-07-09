import Layout from '../components/Layout/Layout';
import './styles.css'
import '../shared/styles/elevation.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function App({ Component, pageProps }) {
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
  );
}

export default App;
