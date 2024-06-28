import useData from "./useData";
import { Driver } from "./useDrivers";
export interface Stint {
  compound: string;
  driver_number: number;
  lap_start: number;
  lap_end: number;
  tyre_age_at_start: number;
  stint_number: number;
  session_key: number;
}

const useStints = (selectedSession: number, selectedDriver: Driver ) =>
  useData<Stint>(
    "/stints",
    { params: { 
      session_key: selectedSession,
      driver_number: selectedDriver.driver_number,
     } },
    [selectedSession, selectedDriver],
    50000 
  );

export default useStints;
