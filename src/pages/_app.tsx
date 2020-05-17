import React from "react";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
// ______________________________________________________
//
const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);
// ______________________________________________________
//
export default App;
