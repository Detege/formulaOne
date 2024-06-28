import useData from "./useData";

export interface RaceEvent {
  category: string;
  driver_number: number;
  message: string;
  scope: string;
  session_key: number;
  date: string;
}

const useRaceControl = (session: number) =>
  useData<RaceEvent>(
    "/race_control",
    {
      params: {
        session_key: session,
      },
    },
    [session],
    5000 // get this in the deps array??
  );

export default useRaceControl;