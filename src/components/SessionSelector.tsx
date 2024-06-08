import { ChangeEvent } from "react";
import useSessions, { Session } from "../hooks/useSessions";
import { MenuState } from "../App";
interface Props {
  selectedGrandPrix?: number;
  onSelectSession: (session: Session) => void;
  menuState: MenuState;
  selectedSession: number;
}
const SessionSelector = ({
  selectedGrandPrix,
  onSelectSession,
  menuState,
  selectedSession,
}: Props) => {
  const { data: sessions } = useSessions(selectedGrandPrix);
  const uniqueSessionKeys = sessions.map((sesh: Session) => sesh.session_key);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = Number(event.target.value);
    const selection = sessions[selectedIndex];
    if (selection) {
      onSelectSession(selection);
    }
  };

  return (
    <label className="block">
      <div className="flex flex-col items-start">
        <span>Session</span>
        <select
          className="w-full"
          name="Session"
          value={
            menuState.session === false
              ? "default"
              : uniqueSessionKeys.indexOf(selectedSession)
          }
          onChange={handleChange}
        >
          {menuState.session === false && (
            <option value={"default"}>Select Session</option>
          )}
          {sessions.map((session, index) => (
            <option value={index} key={index}>
              {session.session_type}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};

export default SessionSelector;
