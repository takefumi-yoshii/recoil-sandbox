import Document from "next/document";
import { Head, Main, NextScript } from "next/document";
// ______________________________________________________
//
export default class extends Document {
  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
