import useData from "./useData";

export interface Driver {
  driver_number: number;
  first_name: string;
  last_name: string;
  headshot_url: string;
  name_acronym: string;
  session_key: number;
  team_colour: string;
}

const useDrivers = (session: number) =>
  useData<Driver>(
    "/drivers",
    {
      params: {
        session_key: session,
      },
    },
    [session]
  );

export default useDrivers;
