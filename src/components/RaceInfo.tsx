import usePolling from "../hooks/usePolling";
import RaceUpdateListItem from "./RaceUpdateListItem";

interface Props {
  selectedSession: number;
}

const RaceInfo = ({ selectedSession }: Props) => {
    const { raceData } = usePolling(selectedSession, 3000);
    
    const selectedRaceUpdates =
      raceData &&
      raceData
        .filter((update) => update.session_key === selectedSession)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Using getTime() for numeric comparison
  
    return (
      <ul>
        {selectedRaceUpdates?.map((update, index) => (
          <RaceUpdateListItem key={index} update={update} />
        ))}
      </ul>
    );
  };

export default RaceInfo;
