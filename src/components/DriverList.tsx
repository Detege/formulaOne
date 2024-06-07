import DriverListItem from "../components/DriverListItem";
import { Driver } from "../hooks/useDrivers";

interface Props {
  drivers: Driver[];
  onSelectDriver: (driver: number) => void;
}

const DriverList = ({ drivers, onSelectDriver }: Props) => {

  return (
    <ul>
      {drivers.map((driver, index) => (
        <div onClick={() => onSelectDriver(driver.driver_number)} key={index}>
          <DriverListItem driver={driver} />
        </div>
      ))}
    </ul>
  );
};

export default DriverList;
