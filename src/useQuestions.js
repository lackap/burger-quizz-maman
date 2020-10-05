import fetchBurdino from "./fetchBurdino";
import { useQuery } from "react-query";

export default function useQuestions(name) {
  return useQuery([{ name }], () => fetchBurdino(`/${name}`));
}
