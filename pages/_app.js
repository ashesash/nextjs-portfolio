import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { philosopher, merriweather, trirong } from '@/lib/fonts';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${philosopher.variable} ${merriweather.variable} ${trirong.variable}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}