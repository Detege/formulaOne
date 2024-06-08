import useData from "./useData";
export interface Stint {
  compound: string;
  driver_number: number;
  lap_start: number;
  lap_end: number;
  tyre_age_at_start: number;
  stint_number: number;
  session_key: number;
}

const useStints = (selectedSession: number, selectedDriver: number ) =>
  useData<Stint>(
    "/stints",
    { params: { 
      session_key: selectedSession,
      driver_number: selectedDriver,
     } },
    [selectedSession, selectedDriver]
  );

export default useStints;
