import "./globals.css";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
