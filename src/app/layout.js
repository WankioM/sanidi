// app/layout.js
import localFont from "next/font/local";
import "./globals.css";

const gordquick = localFont({
  src: './fonts/GordQucik-Black.otf',
  variable: '--font-gordquick'
})

const aspekta = localFont({
  src: [
    {
      path: './fonts/Aspekta-150.ttf',
      weight: '150',
      style: 'normal',
    },
    {
      path: './fonts/Aspekta-250.ttf',
      weight: '250',
      style: 'normal',
    },
    {
      path: './fonts/Aspekta-450.ttf',
      weight: '450',
      style: 'normal',
    },
    {
      path: './fonts/Aspekta-700.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aspekta'
})

export const metadata = {
  title: 'WAGMI Builder',
  description: 'Build your WAGMI config with no code',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="gordquick_6443a91e-module__tSBbNW__variable aspekta_a631a217-module__9zFJuG__variable">
        {children}
      </body>
    </html>
  );
}