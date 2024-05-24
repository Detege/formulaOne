import { SessionQuery } from "../App";
import DriverListItem from "../components/DriverListItem";
import useDrivers, { Driver } from "../hooks/useDrivers";

interface Props {
    onSelectDriver: (driver: Driver) => void;
    sessionQuery: SessionQuery;
  }

const DriverList = ({ onSelectDriver, sessionQuery }: Props) => {
  const { data, error, isLoading } = useDrivers(sessionQuery);

  if (error) return <p>error</p>;
  if (isLoading) return <p>loading</p>;

  return (
    <ul>
      {data.map((driver, index) => (
        <div onClick={() => onSelectDriver(driver)} key={index}>
            <DriverListItem driver={driver} />
        </div>
      ))}
    </ul>
  );
};

export default DriverList;
