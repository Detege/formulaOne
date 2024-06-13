import { Driver } from "../hooks/useDrivers";
import useRaceControl, { RaceEvent } from "../hooks/useRaceControl";

interface Props {
  selectedSession: number;
  selectedDriver: Driver;
}

const EventList = ({ selectedSession, selectedDriver }: Props) => {
  const { data: events } = useRaceControl(selectedSession, selectedDriver);
  const categories = events.map((eve: RaceEvent) => eve.category);
  const uniqueCategories = Array.from(new Set(categories.map((cat) => cat)));
  
  const scopes = events.map((scop: RaceEvent) => scop.scope);
  const uniqueScopes = Array.from(new Set(scopes.map((scop) => scop)));

  return (
    <>
    <div className="flex flex-row">

      <div>
        <ul>
          {uniqueCategories.map((category, index) => (
              <li key={index}>{category}</li>
              ))}
        </ul>
      </div>
      <div >
        <ul>
          {uniqueScopes.map((scope, index) => (
              <li key={index}>{scope}</li>
              ))}
        </ul>
      </div>
            </div>
    </>
  );
};

export default EventList;
