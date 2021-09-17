import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CryptoTracker from '../components/CryptoTracker/CryptoTracker';
import Footer from '../components/Footer/Footer';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{'Bitcoin is volatile'}</title>
      <meta
        name="description"
        content={
          'In a episode of HBO’s Silicon Valley, Gilfoyle (Martin Starr) reveals that he mines bitcoin as a side gig — but only when the price is above a certain value. He creates an alert that plays the 1.36 second death metal song “You Suffer” by Napalm Death whenever bitcoin rises or drops so he can remote toggle his rig at home. Given the volatility of bitcoin and the volume of the song, this quickly becomes annoying and becomes a recurring theme throughout the episode. With this, now all user can completely imitate Gilfoyle as an actual mining rig at home to toggle on and off remotely.'
        }
      />
      <meta
        name="keywords"
        content={'bitcoin,volatile,silicon valley,hbo,gilfoyle'}
      />
      <meta name="robots" content="index,follow" />
      <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
    </Helmet>
    <CryptoTracker cryptoName="bitcoin" />
    <Footer />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
