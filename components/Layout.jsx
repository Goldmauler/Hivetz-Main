import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative min-h-screen overflow-x-hidden`}
    >
      {/* metadata */}
      <Head>
        <title>HIVETZ | Premium Poultry Feed Solutions</title>
        <meta
          name="description"
          content="HIVETZ delivers scientifically formulated poultry feed products designed to maximize health, performance, and profitability for modern farming operations."
        />
        <meta
          name="keywords"
          content="poultry feed, animal nutrition, livestock feed, farm solutions, poultry health, premium feed, HIVETZ"
        />
        <meta name="author" content="HIVETZ" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content - removed padding that causes gap */}
      <div className="w-full">
        {children}
      </div>
    </main>
  );
};

export default Layout;