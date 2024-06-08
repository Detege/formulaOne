import { MenuState } from "../App";
import DriverListItem from "../components/DriverListItem";
import useDrivers from "../hooks/useDrivers";
interface Props {
  onSelectDriver: (driver: number) => void;
  menuState: MenuState;
  selectedSession: number;
}

const DriverList = ({ onSelectDriver, menuState, selectedSession }: Props) => {
  const { data: drivers } = useDrivers(selectedSession);

  if (menuState.session === false) {
    return <p className="text-left">Select a Grand Prix<br/>and a Session</p>;
  }

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
