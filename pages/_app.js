/* pages/_app.js */
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="container min-h-screen px-4">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <Navbar />
        <NextNProgress color="#ec4899" />
        <Component {...pageProps} />
      </div>
      <div className="mt-auto">
        <footer className="flex bg-black justify-center p-5">
          <p className="text-white text-sm text-center">
            Copyright 2022 MetaOutlet
          </p>
        </footer>
      </div>
    </div>
  );
}

export default MyApp;
