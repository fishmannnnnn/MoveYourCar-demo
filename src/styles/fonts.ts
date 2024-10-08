import { Roboto, Inter, Roboto_Condensed } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'], weight: '900' });
export const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });
export const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400', '700'],
});