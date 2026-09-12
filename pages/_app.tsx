// import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log(" _APP is working ");
  return <Component {...pageProps} />;
}
