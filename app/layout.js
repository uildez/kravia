import "./globals.css";
import Head from "next/head";
import LayoutWrapper from "./components/layoutWrapper";

export const metadata = {
  title: "Kravia | Treinamentos que moldam os profissionais",
  description: "Domine as tecnologias que movem o mundo. O mercado exige mais do que experiência: exige certificações, conhecimento prático e atualização constante.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon2/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon2/favicon.svg" />
        <link rel="shortcut icon" href="/favicon2/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon2/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon2/site.webmanifest" />
      </Head>
      <body
        className={`antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
