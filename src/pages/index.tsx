import { GetServerSidePropsContext, NextPage } from "next";
import { initStore, fetchInitialState } from "../store";
import Home from "../components/home";
// ______________________________________________________
//
import type { Atoms } from "../store";
type Props = {
  atoms: Atoms;
};
// ______________________________________________________
//
export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{ props: Props }> {
  const email = (context.query.email || "") as string;
  const { atoms } = await fetchInitialState(email);
  return { props: { atoms } };
}
// ______________________________________________________
//
const Page: NextPage<Props> = (props) => {
  initStore(props.atoms);
  return <Home />;
};
// ______________________________________________________
//
export default Page;
