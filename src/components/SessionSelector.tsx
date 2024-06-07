import { ChangeEvent } from "react";
import useSessions, { Session } from "../hooks/useSessions";
interface Props {
  selectedGrandPrix?: number;
  onSelectSession: (session: Session) => void;
  selectedSession: number;
  toggleState: () => void;
}
const SessionSelector = ({
  selectedGrandPrix,
  onSelectSession,
  selectedSession,
  toggleState,
}: Props) => {
  const { data: sessions } = useSessions(selectedGrandPrix);
  const uniqueSessionKeys = sessions.map((sesh: Session) => sesh.session_key);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = Number(event.target.value);
    const selection = sessions[selectedIndex];
    if (selection) {
      onSelectSession(selection);
      toggleState();
    }
  };

  return (
    <label className="block mb-4">
      <div className="flex flex-col items-start">
        <span>Session</span>
        <select
          name="Session"
          value={uniqueSessionKeys.indexOf(selectedSession)}
          onChange={handleChange}
        >
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
