import React from "react";
import { ParsedUrlQuery } from "querystring";
import { GetServerSideProps, NextPage } from "next";
import { restore, fetchStoreInitialState } from "../store";
import { StoreState } from "../store";
import Home from "../components/home";
// ______________________________________________________
//
function getCountFromString(count: string) {
  const c = Number(count);
  if (isNaN(c)) return 1;
  if (c < 0) return 1;
  return c;
}
function getValuesFromQuery(query: ParsedUrlQuery) {
  const label = (query.label || "task") as string;
  const count = (query.count || "1") as string;
  return { label, count: getCountFromString(count) };
}
// ______________________________________________________
//
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { label, count } = getValuesFromQuery(context.query);
  const initialStoreState = await fetchStoreInitialState(label, count);
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
