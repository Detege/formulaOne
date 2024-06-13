// src/hooks/usePolling.ts
import { useEffect, useRef, useState } from "react";
import { Driver } from "./useDrivers";
import useRaceControl, { RaceEvent } from "./useRaceControl";

const usePolling = (
  session: number,
  driver: Driver,
  interval: number = 3000
) => {
  const { data: updates } = useRaceControl(session, driver);
  const [raceData, setRaceData] = useState<RaceEvent[] | null>(null);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  
  const fetchData = async () => {
      setRaceData(updates)
  };


  useEffect(() => {
    updates; // Initial fetch
    pollingRef.current = setInterval(fetchData, interval);

    // Cleanup interval on component unmount
    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }
    };
  }, [session, driver.driver_number, interval]);

  return { raceData };
};

export default usePolling;
