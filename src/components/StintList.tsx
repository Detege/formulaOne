import { Driver } from "../hooks/useDrivers";
import useStints from "../hooks/useStints";
import StintsListItem from "./StintsListItem";

interface Props {
  selectedSession: number;
  selectedDriver: Driver;
}

const StintList = ({ selectedSession, selectedDriver }: Props) => {
  const { data } = useStints(selectedSession, selectedDriver);

  return (
    <>
      <h2 className="text-left mb-4 text-2xl font-bold">{selectedDriver.last_name || 'Select a driver'}</h2>
      <ul>
        {data.map((stint, index) => (
          <StintsListItem key={index} stint={stint} />
        ))}
      </ul>
    </>
  );
};

export default StintList;
