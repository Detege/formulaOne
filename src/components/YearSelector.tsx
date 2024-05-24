import { ChangeEvent } from "react";
import useGrandPrix, { Gp } from "../hooks/useGrandPrix";
import { SessionQuery } from "../App";

interface Props {
    onSelectYear: (year: number) => void;
}

const YearSelector = ({ onSelectYear }: Props) => {

  const { data } = useGrandPrix({} as SessionQuery);
  const uniqueYears = Array.from(new Set(data.map((gp: Gp) => gp.year)));
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = Number(event.target.value);
    const selectedYear = uniqueYears[selectedIndex];
    if (selectedYear) {
        onSelectYear(selectedYear);
    }
  };

  return (
    <>
      <label htmlFor="yearSelect">Year: </label>

      <select name="year" id="yearSelect" onChange={handleChange}>
        {uniqueYears.map((year, index) => (
          <option value={index} key={index}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
};

export default YearSelector;
