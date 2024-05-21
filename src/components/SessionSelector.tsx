import { ChangeEvent } from "react";
import useSessions, { Session } from "../hooks/useSessions";

interface Props {
  onSelectSession: (sesh: Session["session_key"]) => void;
}
export const defaultSession: Session["session_key"] = "latest" ;

const SessionSelector = ({ onSelectSession }: Props) => {
  const { data } = useSessions();


  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = Number(event.target.value);

    if (selectedIndex === data.length) {
      onSelectSession(defaultSession);
    } else {
      const selectedSession = data[selectedIndex].session_key;
      if (selectedSession) {
        onSelectSession(selectedSession);
      }
    }
  };

  return (
    <>
      <label htmlFor="sessionSelect">Session: </label>

      <select name="sessions" id="sessionSelect" onChange={handleChange}>
        <option value={data.length}>Current/Last</option>
        {data.map((sesh, index) => (
          <option value={index} key={sesh.session_key}>
            {sesh.session_name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SessionSelector;

