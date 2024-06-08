import useStints from "../hooks/useStints";
import StintsListItem from "./StintsListItem";

interface Props {
  selectedSession: number;
  selectedDriver: number;
}

const StintList = ({ selectedSession, selectedDriver }: Props) => {
  const { data } = useStints(selectedSession, selectedDriver);

  return (
    <ul>
      {data.map((stint, index) => (
        <StintsListItem key={index} stint={stint} />
      ))}
    </ul>
  );
};

export default StintList;
