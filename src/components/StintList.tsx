import { Session } from "../hooks/useSessions";
import useStints, { Stint } from "../hooks/useStints";
import StintsListItem from "./StintsListItem";

interface Props {
  stints: Stint[];
  filteredSessions: Session[];
  selectedDriverNumber: number;
}

const StintList = ({ filteredSessions }: Props) => {
  const latestSession = filteredSessions[0];
  const { data } = useStints(latestSession);

  return (
    <ul>
      {data.map((stint, index) => (
        <StintsListItem key={index} stint={stint} />
      ))}
    </ul>
  );
};

export default StintList;
