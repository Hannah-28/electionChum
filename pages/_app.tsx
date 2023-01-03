import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ProSidebarProvider } from 'react-pro-sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProSidebarProvider>
      <Component {...pageProps} />
    </ProSidebarProvider>
  );
}

export default MyApp;
