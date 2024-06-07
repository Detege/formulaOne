import useData from "./useData";


export interface Driver {
  driver_number: number;
  full_name: string;
  headshot_url: string;
  name_acronym: string;
  team_colour: string;
}
const useDrivers = () => useData<Driver>("/drivers",
{ params: {
  
}},
[]
);

export default useDrivers;
