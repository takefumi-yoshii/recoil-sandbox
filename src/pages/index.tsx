import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { initStore, fetchInitialState } from "../store";
import { getValuesFromQuery } from "../utils/query";
import Home from "../components/home";
// ______________________________________________________
//
import type { Atoms } from "../store";
type Props = {
  atoms: Atoms;
  label: string;
  count: number;
};
// ______________________________________________________
//
export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: Props }> => {
  const { label, count } = getValuesFromQuery(context.query);
  const { atoms } = await fetchInitialState(label, count);
  return { props: { atoms, label, count } };
};
// ______________________________________________________
//
const Page: NextPage<Props> = (props) => {
  initStore(props.atoms);
  return <Home label={props.label} count={props.count} />;
};
// ______________________________________________________
//
export default Page;
