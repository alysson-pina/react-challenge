import '@mantine/core/styles.css';

import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Planets } from './components/Planets';

const queryClient = new QueryClient();
const theme = createTheme({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <Planets />

        <ReactQueryDevtools initialIsOpen={false} />
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
