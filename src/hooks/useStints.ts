import useData from "./useData";
import { Driver } from "./useDrivers";
import { Session } from "./useSessions";

export interface Stint {
  compound: string;
  driver_number: number;
  tyre_age_at_start: number;
  stint_number: number;
  session_key: number;
}

const useStints = (selectedDriver: Driver | null, selectedSession: Session["session_key"]) =>
  useData<Stint>(
    "/stints",
    { params: { 
        session_key: selectedSession,
        driver_number: selectedDriver?.driver_number,
     } },
    [selectedSession, selectedDriver?.driver_number]
  );

export default useStints;
