import { useState } from "react";
import "./App.css";
import StintList from "./components/StintList";
import { Driver } from "./hooks/useDrivers";
import DriverList from "./components/DriverList";
import FilterMenu from "./components/FilterMenu";
import { Session } from "./hooks/useSessions";
import { Gp } from "./hooks/useGrandPrix";

export interface SessionQuery {
  session: Session["session_key"];
  gp: Gp;
  year: number;
}

function App() {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [sessionQuery, setSessionQuery] = useState<SessionQuery>(
    {} as SessionQuery
  );

  const liveSession: SessionQuery = {
    session: "latest",
    gp: {
      year: 2024,
      circuit_short_name: "latest",
      meeting_key: "latest",
    },
    year: 2024,
  };

  const toggleState = () => {
    setSessionQuery(liveSession);
  };

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
          <FilterMenu
            sessionQuery={sessionQuery}
            onSelectSession={(session) =>
              setSessionQuery({ ...sessionQuery, session })
            }
            onSelectGp={(gp) => setSessionQuery({ ...sessionQuery, gp })}
            onSelectYear={(year) => setSessionQuery({ ...sessionQuery, year })}
            toggleState={toggleState}
          />
          { selectedDriver &&
          <StintList
            selectedDriver={selectedDriver}
            sessionQuery={sessionQuery}
          /> }
        </div>
        <div className="col-span-2">Race info</div>
      </div>
    </>
  );
}

export default App;
