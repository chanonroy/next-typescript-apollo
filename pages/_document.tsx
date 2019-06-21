
import Document, { Head, Main, NextScript } from 'next/document';
import React, { ReactNode } from 'react';
import { ServerStyleSheet } from 'styled-components';

interface Props {
  styleTags: ReactNode[];
}

/**
 * Replaces the HTML wrapping the app.
 */
export default class MyDocument extends Document<Props> {
  /**
   * Collect stylesheets from styled-components and add
   * global styles to the app.
   */
  public static getInitialProps({ renderPage }) {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      styleTags
    };
  }

  public render = () => {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  };
}
