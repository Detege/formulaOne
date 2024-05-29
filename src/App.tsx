import { useState } from "react";
import "./App.css";
import StintList from "./components/StintList";
import  { Driver } from "./hooks/useDrivers";
import DriverList from "./components/DriverList";
import  { Session } from "./hooks/useSessions";
import { Gp } from "./hooks/useGrandPrix";
import YearSelector from "./components/YearSelector";
import GpSelector from "./components/GpSelector";
import SessionSelector from "./components/SessionSelector";
import LiveButton from "./components/LiveButton";

export interface SessionQuery {
  session: Session["session_key"];
  gp: Gp;
  year: number;
}
const d = new Date();
let thisYear = d.getFullYear();
const liveSession: SessionQuery = {
  session: "latest",
  gp: {
    year: thisYear,
    circuit_short_name: "latest",
    meeting_key: "latest",
  },
  year: thisYear,
};

const firstDriver: Driver = {
  driver_number: 1
};


function App() {
  const [selectedDriver, setSelectedDriver] = useState<Driver>( firstDriver );
  const [sessionQuery, setSessionQuery] = useState<SessionQuery>( liveSession );

  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1">
          <h1 className="text-xl font-bold pb-4">Drivers</h1>
          <DriverList
            sessionQuery={sessionQuery}
            onSelectDriver={(driver) => setSelectedDriver(driver)}
          />
        </div>
        <div className="col-span-3">
          <div className="ml-10 flex items-baseline space-x-4">
            <YearSelector
              onSelectYear={(year) =>
                setSessionQuery({ ...sessionQuery, year })
              }
            />
            <GpSelector
              sessionQuery={sessionQuery}
              onSelectGp={(gp) => setSessionQuery({ ...sessionQuery, gp })}
            />
            <SessionSelector
              sessionQuery={sessionQuery}
              onSelectSession={(session) =>
                setSessionQuery({ ...sessionQuery, session })
              }
            />
            <LiveButton toggleState={() => setSessionQuery(liveSession)} />
          </div>

          {selectedDriver && (
            <StintList
              selectedDriver={selectedDriver}
              sessionQuery={sessionQuery}
            />
          )}
        </div>
        <div className="col-span-2">Race info</div>
      </div>
    </>
  );
}

export default App;
