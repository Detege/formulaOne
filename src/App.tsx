import { useEffect, useState } from "react";
import "./App.css";
// import StintList from "./components/StintList";
// import useDrivers from "./hooks/useDrivers";
// import DriverList from "./components/DriverList";
import useLatestSessions from "./hooks/useLatestSessions";
import YearSelector from "./components/YearSelector";
import GpSelector from "./components/GpSelector";
import SessionSelector from "./components/SessionSelector";
import LiveButton from "./components/LiveButton";
// import useStints from "./hooks/useStints";

export interface MenuState {
  latest: Boolean;
  grandPrix: Boolean;
  session: Boolean;
}

function App() {
  // const [selectedDriverNumber, setSelectedDriverNumber] = useState<number>();
  const { data: latestSessions } = useLatestSessions();
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [selectedGrandPrix, setSelectedGrandPrix] = useState<number>(
    {} as number
  );
  const [selectedSession, setSelectedSession] = useState<number>({} as number);
  const [menuState, setMenuState] = useState<MenuState>({
    latest: true,
    grandPrix: true,
    session: true,
  });

  // const { data: stints } = useStints(currentSession, 1);
  // const { data: drivers } = useDrivers();

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

      // if (stints.length > 0) {
      //   const latestStint = stints.find(stint => stint.session_key === latestSession.session_key);
      //   // if (latestStint) {
      //   //   setSelectedDriverNumber(latestStint.driver_number);
      //   // }
      // }
    }
  };

  useEffect(() => {
    setCurrent();
  }, [
    latestSessions,
    menuState.latest,
    // stints
  ]);

  // const filteredSessions = sessions.filter(session => {
  //   const stint = stints.find( stint =>
  //     stint.session_key === session.session_key && stint.driver_number === selectedDriverNumber
  //   );
  //   return (
  //     stint &&
  //     session.year === selectedYear &&
  //     session.meeting_key === selectedGrandPrix &&
  //     session.session_key === selectedSession
  //   );
  // });

  const selector = (selection: any) => {
    if (selection.hasOwnProperty("session_key")) {
      setMenuState({ ...menuState, session: true });
      setSelectedSession(selection.session_key);
    } else if (selection.hasOwnProperty("circuit_short_name")) {
      setMenuState({ ...menuState, grandPrix: true, session: false });
      setSelectedGrandPrix(selection.meeting_key);
    }
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1">
          <h1 className="text-xl font-bold pb-4">Drivers</h1>
          {/* <DriverList
            drivers={drivers}
            onSelectDriver={(driverNumber) => setSelectedDriverNumber(driverNumber)}
          /> */}
        </div>
        <div className="col-span-3">
          <div className="ml-10 flex items-baseline space-x-4">
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

          {/* {selectedDriverNumber && (
            <StintList
            stints={stints}
            filteredSessions={filteredSessions}
            selectedDriverNumber={selectedDriverNumber}
            />
          )} */}
        </div>
        <div className="col-span-2">Race info</div>
      </div>
    </>
  );
}

export default App;
