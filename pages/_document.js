import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-inconsolata">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
