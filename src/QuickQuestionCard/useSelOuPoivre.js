import fetchBurdino from "../fetchBurdino";
import { useQuery } from "react-query";

export default function useSelOuPoivre() {
  return useQuery(["selOuPoivre"], () => fetchBurdino("/selOuPoivre"));
}
