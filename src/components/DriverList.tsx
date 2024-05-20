import DriverListItem from "../components/DriverListItem";
import useDrivers, { Driver } from "../hooks/useDrivers";

interface Props {
    onSelectDriver: (driver: Driver) => void;
  }

const DriverList = ({ onSelectDriver }:Props) => {
  const { data, error, isLoading } = useDrivers();

  if (error) return <p>error</p>;
  if (isLoading) return <p>loading</p>;

  return (
    <ul>
      {data.map((driver) => (
        <div onClick={() => onSelectDriver(driver)} key={driver.driver_number}>
            <DriverListItem driver={driver} />
        </div>
      ))}
    </ul>
  );
};

export default DriverList;
