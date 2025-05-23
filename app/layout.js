import "./globals.css";
import Head from "next/head";
import LayoutWrapper from "./components/layoutWrapper";

export const metadata = {
  title: "Kravia | Treinamentos que moldam os profissionais",
  description: "Domine as tecnologias que movem o mundo. O mercado exige mais do que experiência: exige certificações, conhecimento prático e atualização constante.",
  icons: {
    icon: [
      { url: "/favicon2/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon2/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon2/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/favicon2/apple-touch-icon.png",
  },
  manifest: "/favicon2/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
