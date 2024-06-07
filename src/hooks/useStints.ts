import useData from "./useData";
import { Session } from "./useSessions";

export interface Stint {
  compound: string;
  driver_number: number;
  tyre_age_at_start: number;
  stint_number: number;
  session_key: number;
}

const useStints = (latestSession: Session ) =>
  useData<Stint>(
    "/stints",
    { params: { 
      session_key: latestSession.session_key
     } },
    [latestSession]
  );

export default useStints;
