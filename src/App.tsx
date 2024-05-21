import { useState } from "react";
import "./App.css";
import StintList from "./components/StintList";
import { Driver } from "./hooks/useDrivers";
import DriverList from "./components/DriverList";
import SessionSelector, { defaultSession } from "./components/SessionSelector";
import { Session } from "./hooks/useSessions";

function App() {
  
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [selectedSession, setSelectedSession] = useState<Session["session_key"]>(defaultSession);

  
  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1">
          <h1 className="text-xl font-bold pb-4">Drivers</h1>
          <DriverList onSelectDriver={(driver) => setSelectedDriver(driver)} />
        </div>
        <div className="col-span-3">
          <SessionSelector onSelectSession={(sesh) => setSelectedSession(sesh)} />
          <StintList selectedDriver={selectedDriver} selectedSession={selectedSession} />
        </div>
        <div className="col-span-2">Race info</div>
      </div>
    </>
  );
}

export default App;
