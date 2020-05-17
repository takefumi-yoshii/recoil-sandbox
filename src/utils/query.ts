import { ParsedUrlQuery } from "querystring";
// ______________________________________________________
//
function getCountFromString(count: string) {
  const c = Number(count);
  if (isNaN(c)) return 1;
  if (c < 0) return 1;
  return c;
}
export function getValuesFromQuery(query: ParsedUrlQuery) {
  const label = (query.label || "task") as string;
  const count = (query.count || "1") as string;
  return { label, count: getCountFromString(count) };
}
