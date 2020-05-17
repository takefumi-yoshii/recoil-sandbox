import React from "react";
import App, { AppProps, AppContext } from "next/app";
import { RecoilRoot } from "recoil";
import {
  storeFactory,
  getOrCreateStore,
  fetchStoreInitialState,
} from "../store";
// ______________________________________________________
//
export let store = storeFactory();
// ______________________________________________________
//
export default class extends React.Component<AppProps> {
  constructor(props: any) {
    super(props);
    store = getOrCreateStore(props.initialStoreState);
  }
  static async getInitialProps(appContext: AppContext) {
    const appProps = await App.getInitialProps(appContext);
    const label = (appContext.router.query.label || "task") as string;
    const count = (appContext.router.query.count || "1") as string;
    const initialStoreState = await fetchStoreInitialState(
      label,
      Number(count)
    );
    return {
      ...appProps,
      initialStoreState,
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <RecoilRoot>
        <Component {...pageProps} store={store} />
      </RecoilRoot>
    );
  }
}
