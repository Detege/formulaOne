import { useEffect, useRef, useState } from "react";
import useRaceControl, { RaceEvent } from "./useRaceControl";

const usePolling = (session: number, interval: number = 3000) => {
  const [trigger, setTrigger] = useState(0); // Trigger signal
  const { data: updates } = useRaceControl(session, trigger);
  const [raceData, setRaceData] = useState<RaceEvent[] | null>(null);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const fetchData = () => {
      setTrigger((prev) => prev + 1); // Increment trigger to re-fetch data
    };

    fetchData(); // Initial fetch

    if (pollingRef.current) {
      clearInterval(pollingRef.current);
    }

    pollingRef.current = setInterval(fetchData, interval);

    // Cleanup interval on component unmount
    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }
    };
  }, [session, interval]); // Ensure to include session and interval as dependencies

  useEffect(() => {
    setRaceData(updates);
  }, [updates]);

  return { raceData };
};

export default usePolling;
