import { ChangeEvent } from "react";
import { SessionQuery } from "../App";
import useSessions, { Session } from "../hooks/useSessions";

interface Props {
    onSelectYear: (year: number) => void;
}

const YearSelector = ({ onSelectYear }: Props) => {

  const { data } = useSessions({} as SessionQuery);
  const uniqueDates = data.map((date: Session) => new Date(date.date_start));
  const uniqueYears = Array.from(new Set(uniqueDates.map((year) => year.getFullYear() )));
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
