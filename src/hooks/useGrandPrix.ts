import { SessionQuery } from "../App";
import useData from "./useData";

export interface Gp {
  year: number;
  circuit_short_name: string;
  meeting_key: number | string;
}

const useGrandPrix = (sessionQuery: SessionQuery) => useData<Gp>("/meetings",
  { params: {
    year: sessionQuery?.year
  }},
  [sessionQuery?.year]
);

export default useGrandPrix;
