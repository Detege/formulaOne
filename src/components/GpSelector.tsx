import { ChangeEvent } from "react";
import useGrandPrix, { Gp } from "../hooks/useGrandPrix";
import { SessionQuery } from "../App";

interface Props {
    onSelectGp: (go: Gp) => void;
    sessionQuery: SessionQuery;
}

const GpSelector = ({ onSelectGp, sessionQuery }:Props) => {
    const { data } = useGrandPrix(sessionQuery);
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = Number(event.target.value);
        const selectedGp = data[selectedIndex];
        if (selectedGp) {
            onSelectGp(selectedGp);
        }
      };

    return (
        <>
          <label htmlFor="grandPrixSelect">Grand Prix: </label>
    
          <select name="grandPrix" id="grandPrixSelect" onChange={handleChange}>
            {data.map((gp, index) => (
              <option value={index} key={index}>
                {gp.circuit_short_name}
              </option>
            ))}
          </select>
        </>
      );
}

export default GpSelector