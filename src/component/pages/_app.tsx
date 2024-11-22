import { Arimo, Baloo_2, Lato } from '@next/font/google';
import type { AppProps } from 'next/app';

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular (400) and Bold (700)
});

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: '400', // Regular weight
});
const lato = Lato({
  subsets: ['latin'],   
  weight: ['400', '700'], // Regular (400) and Bold (700)
  });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${arimo.className} ${baloo.className} ${lato.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
