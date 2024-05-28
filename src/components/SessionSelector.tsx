import { ChangeEvent } from "react";
import useSessions, { Session } from "../hooks/useSessions";
import { SessionQuery } from "../App";

interface Props {
  onSelectSession: (session: Session["session_key"]) => void;
  sessionQuery: SessionQuery;
}
const SessionSelector = ({ onSelectSession, sessionQuery }: Props) => {
  const { data } = useSessions(sessionQuery);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = Number(event.target.value);

    const selectedSession = data[selectedIndex].session_key;
    if (selectedSession) {
      onSelectSession(selectedSession);
    }
  };

  return (
    <>
      <label htmlFor="sessionSelect">Session: </label>

      <select name="sessions" id="sessionSelect" onChange={handleChange}>
        {data.map((session, index) => (
          <option value={index} key={session.session_key}>
            {session.session_name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SessionSelector;
