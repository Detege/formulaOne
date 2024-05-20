import { useState } from "react";
import "./App.css";
import StintList from "./components/StintList";
import { Driver } from "./hooks/useDrivers";
import DriverList from "./components/DriverList";

function App() {
  
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  
  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1">
          <h1 className="text-xl font-bold pb-4">Drivers</h1>
          <DriverList onSelectDriver={(driver) => setSelectedDriver(driver)} />
        </div>
        <div className="col-span-3">
          <StintList selectedDriver={selectedDriver} />
        </div>
        <div className="col-span-2">01</div>
      </div>
    </>
  );
}

export default App;
