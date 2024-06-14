import { useEffect, useRef, useState } from "react";
import useRaceControl, { RaceEvent } from "./useRaceControl";

const usePolling = (session: number, interval: number = 3000) => {
  const { data: updates } = useRaceControl(session);
  const [raceData, setRaceData] = useState<RaceEvent[] | null>(null);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const fetchData = () => {
      setRaceData(updates);
    };

    fetchData();

    pollingRef.current = setInterval(fetchData, interval);

    // Cleanup interval on component unmount
    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }
    };
  }, [updates]);

  return { raceData };
};

export default usePolling;
