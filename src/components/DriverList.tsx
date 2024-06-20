import { useEffect, useState } from "react";
import { MenuState } from "../App";
import DriverListItem from "../components/DriverListItem";
import useDrivers, { Driver } from "../hooks/useDrivers";
interface Props {
  onSelectDriver: (driver: Driver) => void;
  menuState: MenuState;
  selectedSession: number;
  selectedDriver: Driver;
}

const DriverList = ({
  onSelectDriver,
  menuState,
  selectedSession,
  selectedDriver,
}: Props) => {
  const { data: drivers } = useDrivers(selectedSession);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSelectDriver = (driver: Driver) => {
    onSelectDriver(driver);
    setIsExpanded(false);
  };

  useEffect(() => {
    if (drivers[0]) {
      onSelectDriver(drivers[0]);
    }
  }, [drivers]);

  if (menuState.session === false) {
    return (
      <p className="text-left">
        Select a Grand Prix
        <br />
        and a Session
      </p>
    );
  }

  return (
    <ul>
      <div className="lg:hidden" onClick={() => setIsExpanded(!isExpanded)}>
        <DriverListItem
          driver={selectedDriver}
          selectedDriver={selectedDriver}
        />
      </div>
      <div className={`lg:block ${isExpanded ? "block" : "hidden"}`}>
        {drivers.map((driver, index) => (
          <div className={`lg:block ${driver != selectedDriver ? "block" : "hidden"}`} onClick={() => handleSelectDriver(driver)} key={index}>
            <DriverListItem driver={driver} selectedDriver={selectedDriver} />
          </div>
        ))}
      </div>
    </ul>
  );
};

export default DriverList;
