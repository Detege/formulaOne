import "./App.css";
import { useEffect, useState } from "react";
import useLatestSessions from "./hooks/useLatestSessions";
import StintList from "./components/StintList";
import DriverList from "./components/DriverList";
import YearSelector from "./components/YearSelector";
import GpSelector from "./components/GpSelector";
import SessionSelector from "./components/SessionSelector";
import LiveButton from "./components/LiveButton";
import { Driver } from "./hooks/useDrivers";
import EventList from "./components/EventList";
import RaceInfo from "./components/RaceInfo";

export interface MenuState {
  latest: Boolean;
  grandPrix: Boolean;
  session: Boolean;
}

function App() {
  const { data: latestSessions } = useLatestSessions();
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  const [selectedDriver, setSelectedDriver] = useState<Driver>({} as Driver);
  const [selectedGrandPrix, setSelectedGrandPrix] = useState<number>(
    {} as number
  );
  const [selectedSession, setSelectedSession] = useState<number>({} as number);
  const [menuState, setMenuState] = useState<MenuState>({
    latest: true,
    grandPrix: true,
    session: true,
  });

  const setCurrent = () => {
    if (
      latestSessions &&
      latestSessions.length > 0 &&
      menuState.latest === true
    ) {
      const latestSession = latestSessions[0];
      setSelectedYear(latestSession.year);
      setSelectedGrandPrix(latestSession.meeting_key);
      setSelectedSession(latestSession.session_key);
    }
  };

  useEffect(() => {
    setCurrent();
  }, [latestSessions, menuState.latest]);

  const selector = (selection: any) => {
    if (selection.hasOwnProperty("session_key")) {
      setMenuState({ ...menuState, session: true, latest: false });
      setSelectedSession(selection.session_key);
    } else if (selection.hasOwnProperty("circuit_short_name")) {
      setMenuState({
        ...menuState,
        grandPrix: true,
        session: false,
        latest: false,
      });
      setSelectedGrandPrix(selection.meeting_key);
    }
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-8 w-full">
        <div className="flex flex-col items-start col-span-1">
          <h2 className="text-xl font-bold pb-4">Drivers</h2>
          <DriverList
            onSelectDriver={(driver) => setSelectedDriver(driver)}
            menuState={menuState}
            selectedSession={selectedSession}
            selectedDriver={selectedDriver}
          />
        </div>
        <div className="col-span-3">
          <div className="flex items-end gap-4 mb-4">
            <div className="columns-3 w-4/5">
              <YearSelector
                onSelectYear={(year) => setSelectedYear(year)}
                selectedYear={selectedYear}
                toggleState={() =>
                  setMenuState({
                    ...menuState,
                    latest: false,
                    grandPrix: false,
                    session: false,
                  })
                }
              />
              <GpSelector
                selectedYear={selectedYear}
                onSelectGp={(grandPrix) => selector(grandPrix)}
                menuState={menuState}
                selectedGrandPrix={selectedGrandPrix}
              />
              {menuState.grandPrix && (
                <SessionSelector
                  selectedGrandPrix={selectedGrandPrix}
                  onSelectSession={(session) => selector(session)}
                  menuState={menuState}
                  selectedSession={selectedSession}
                />
              )}
            </div>
            <div className="w-1/5 flex justify-end">
              <LiveButton
                toggleState={() =>
                  setMenuState({
                    ...menuState,
                    latest: true,
                    grandPrix: true,
                    session: true,
                  })
                }
              />
            </div>
          </div>
          <StintList
            selectedSession={selectedSession}
            selectedDriver={selectedDriver}
          />
          <EventList
            selectedSession={selectedSession}
            selectedDriver={selectedDriver}
          />
        </div>
        <div className="flex flex-col items-start col-span-2">
          <h2 className="text-xl font-bold pb-4">Race info</h2>
          <RaceInfo
            selectedSession={selectedSession}
            selectedDriver={selectedDriver}
          />
        </div>
      </div>
    </>
  );
}

export default App;
