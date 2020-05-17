import React from "react";
import Home from "../components/home";
import { GetServerSideProps, NextPage } from "next";
import { restore, fetchStoreInitialState } from "../store";
import { StoreState } from "../store";
// ______________________________________________________
//
export const getServerSideProps: GetServerSideProps = async (context) => {
  const label = (context.query.label || "task") as string;
  const count = (context.query.count || "1") as string;
  const initialStoreState = await fetchStoreInitialState(label, Number(count));
  return { props: { initialStoreState, label, count } };
};
// ______________________________________________________
//
const Page: NextPage<{
  initialStoreState: StoreState;
  label: string;
  count: string;
}> = (props) => {
  restore(props.initialStoreState);
  return <Home label={props.label} count={Number(props.count)} />;
};
// ______________________________________________________
//
export default Page;
