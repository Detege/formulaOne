import { ChangeEvent, useEffect } from "react";
import useGrandPrix, { GrandPrix } from "../hooks/useGrandPrix";
import { MenuState } from "../App";

interface Props {
  selectedYear: number;
  selectedGrandPrix: number;
  onSelectGp: (grandPrix: GrandPrix) => void;
  menuState: MenuState;
  toggleState: () => void;
}

const GpSelector = ({ selectedYear, onSelectGp, menuState, selectedGrandPrix, toggleState }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = Number(event.target.value);
    const selection = grandPrix[selectedIndex];
    if (selection) {
      onSelectGp(selection);
      toggleState();
    }
  };
  
  const { data: grandPrix } = useGrandPrix(selectedYear);
  const uniqueMeetingKeys = grandPrix.map((gp: GrandPrix) => gp.meeting_key);
  
  useEffect(() => {
    onSelectGp({} as GrandPrix);
  }, [grandPrix]);


  if (grandPrix.length === 0) {
    return null;
  }

  return (
    <label className="block mb-4">
      <div className="flex flex-col items-start">
        <span>Grand Prix</span>
        <select
          name="grandPrix"
          value={uniqueMeetingKeys.indexOf(selectedGrandPrix)}
          onChange={handleChange}
        >
          {menuState ? (
            grandPrix.map((grandPrix, index) => (
              <option value={index} key={index}>
                {grandPrix.circuit_short_name}
              </option>
            ))
          ) : (
            <option>Select Grand Prix</option>
          )}
        </select>
      </div>
    </label>
  );
};

export default GpSelector;
