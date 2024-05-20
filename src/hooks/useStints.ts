import useData from "./useData";
import { Driver } from "./useDrivers";

export interface Stint {
  compound: string;
  driver_number: number;
  tyre_age_at_start: number;
  stint_number: number;
  session_key: number;
}

const useStints = (selectedDriver: Driver | null) =>
  useData<Stint>(
    "/stints?session_key=9502",
    { params: { driver_number: selectedDriver?.driver_number } },
    [selectedDriver?.driver_number]
  );

export default useStints;
