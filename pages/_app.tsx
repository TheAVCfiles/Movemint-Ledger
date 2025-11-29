import type { AppProps } from 'next/app';
import '../styles/movemint.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
