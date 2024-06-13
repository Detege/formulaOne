import { Driver } from "../hooks/useDrivers";
import usePolling from "../hooks/usePolling";

interface Props {
  selectedSession: number;
  selectedDriver: Driver;
}

const RaceInfo = ({ selectedSession, selectedDriver }: Props) => {
  const { raceData } = usePolling(selectedSession, selectedDriver, 3000);
  const selectedRaceUpdates =
    raceData &&
    raceData.filter((update) => update.session_key === selectedSession);
  return (
    <ul>
      {selectedRaceUpdates?.map((update, index) => (
        <li key={index}>{update.message}</li>
      ))}
    </ul>
  );
};

export default RaceInfo;
