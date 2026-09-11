import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT => PAGES ROUTER => SERVER CONNECTION PART ");
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
