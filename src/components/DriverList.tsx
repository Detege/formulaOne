import { useEffect } from "react";
import { MenuState } from "../App";
import DriverListItem from "../components/DriverListItem";
import useDrivers, { Driver } from "../hooks/useDrivers";
interface Props {
  onSelectDriver: (driver: Driver) => void;
  menuState: MenuState;
  selectedSession: number;
  selectedDriver: Driver;
}

const DriverList = ({ onSelectDriver, menuState, selectedSession, selectedDriver }: Props) => {
  const { data: drivers } = useDrivers(selectedSession);
  
  useEffect(() => {
    if (drivers[0]){ onSelectDriver(drivers[0])};
  }, [
    drivers
  ]);
  
  if (menuState.session === false) {
    return <p className="text-left">Select a Grand Prix<br/>and a Session</p>;
  }

  return (
    <ul>
      {drivers.map((driver, index) => (
        <div onClick={() => onSelectDriver(driver)} key={index}>
          <DriverListItem driver={driver} selectedDriver={selectedDriver}/>
        </div>
      ))}
    </ul>
  );
};

export default DriverList;
