import { SessionQuery } from "../App";
import useData from "./useData";
import { Driver } from "./useDrivers";

export interface Stint {
  compound: string;
  driver_number: number;
  tyre_age_at_start: number;
  stint_number: number;
  session_key: number;
}

const useStints = (selectedDriver: Driver | null, sessionQuery: SessionQuery) =>
  useData<Stint>(
    "/stints",
    { params: { 
      meeting_key: sessionQuery.gp?.meeting_key,
      session_key: sessionQuery?.session,
      driver_number: selectedDriver?.driver_number,
     } },
    [sessionQuery, selectedDriver?.driver_number]
  );

export default useStints;
