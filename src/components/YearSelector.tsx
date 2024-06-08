import { ChangeEvent } from "react";
import useGrandPrix, { GrandPrix } from "../hooks/useGrandPrix";

interface Props {
  onSelectYear: (year: number) => void;
  selectedYear: number;
  toggleState: () => void;
}

const YearSelector = ({ onSelectYear, selectedYear, toggleState }: Props) => {
  const { data } = useGrandPrix();

  const uniqueDates = data.map((date: GrandPrix) => date.year);
  const uniqueYears = Array.from(new Set(uniqueDates.map((year) => year)));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = Number(event.target.value);
    const selection = uniqueYears[selectedIndex];
    onSelectYear(selection);
    toggleState();
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <label className="block">
      <div className="flex flex-col items-start">
        <span>Year</span>
        <select
          className="w-full"
          name="year"
          value={uniqueYears.indexOf(selectedYear)}
          onChange={handleChange}
        >
          {uniqueYears.map((year, index) => (
            <option value={index} key={index}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};

export default YearSelector;
