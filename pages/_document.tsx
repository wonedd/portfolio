import Document, {
    Head,
    Html,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
  } from 'next/document';
  
  export default class MyDocument extends Document {
    static async getInitialProps(
      ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render(): JSX.Element {
      return (
        <Html lang="pt-BR">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600;700;900&family=Poppins:wght@400;500;600;700;900&family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
              rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;800&family=Comfortaa:wght@300&family=Inconsolata:wght@500;800;900&family=Montserrat:wght@500&family=Poppins:wght@100;400;500&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bitter:wght@500;800&family=Comfortaa:wght@300&family=Inconsolata:wght@500;800;900&family=Montserrat:wght@500&family=Poppins:wght@100;400;500&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
  
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }