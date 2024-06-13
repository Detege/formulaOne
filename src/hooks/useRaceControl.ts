import useData from "./useData";
import { Driver } from "./useDrivers";

export interface RaceEvent {
  category: string;
  driver_number: number;
  message: string;
  scope: string;
  session_key: number;
}

const useRaceControl = (session: number, driver: Driver) =>
  useData<RaceEvent>(
    "/race_control",
    {
      params: {
        session_key: session,
        driver_number: driver.driver_number,
      },
    },
    [session]
  );

export default useRaceControl;
