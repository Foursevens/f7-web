import { css } from '@f7-web/design';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import React from 'react';

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    /* eslint-disable react/no-array-index-key */
    /* eslint-disable react/no-danger */

    const originalRenderPage = ctx.renderPage;

    try {
      let extractedStyles: string[] = [];
      ctx.renderPage = () => {
        /* eslint-disable @typescript-eslint/no-unsafe-assignment */
        /* eslint-disable @typescript-eslint/no-unsafe-return */
        const { styles, result } = css.getStyles(originalRenderPage);
        extractedStyles = styles;
        return result;
      };

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {extractedStyles.map((content, index) => (
              <style
                key={index}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ))}
          </>
        ),
      };
    } finally {
      //
    }
  }
}
