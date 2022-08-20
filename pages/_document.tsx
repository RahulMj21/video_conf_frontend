import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const setInitialTheme = `
    function getUserPreference(){
      if(window.localStorage.getItem("theme")){
        return window.localStorage.getItem("theme")
      }
      return "light"
    }
    document.body.dataset.theme = getUserPreference()
  `;

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Courgette&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }}></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
