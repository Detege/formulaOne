import useData from "./useData";
import { Driver } from "./useDrivers";

export interface Lap {
  duration_sector_1: number;
  duration_sector_2: number;
  duration_sector_3: number;
  is_pit_out_lap: boolean;
  lap_duration: number;
  lap_number: number;
  segments_sector_1: number;
  segments_sector_2: number;
  segments_sector_3: number;
  st_speed: number;
}

const useLaps = (session: number, selectedDriver: Driver) =>
  useData<Lap>(
    "/laps",
    {
      params: {
        session_key: session,
        driver_number: selectedDriver.driver_number,
      },
    },
    [session, selectedDriver],
    5000
  );

export default useLaps;
