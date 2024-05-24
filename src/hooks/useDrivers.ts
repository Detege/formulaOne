import { SessionQuery } from "../App";
import useData from "./useData";

export interface Driver {
  driver_number: number;
  full_name: string;
  headshot_url: string;
  name_acronym: string;
  team_colour: string;
}

const useDrivers = (sessionQuery: SessionQuery) => useData<Driver>("/drivers",
{ params: {
  session_key: sessionQuery?.session,
}},
[sessionQuery?.session,]
);

export default useDrivers;
