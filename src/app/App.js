import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CryptoTracker from '../components/CryptoTracker/CryptoTracker';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CryptoTracker cryptoName="bitcoin" />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
