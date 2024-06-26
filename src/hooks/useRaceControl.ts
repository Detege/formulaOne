import useData from "./useData";

export interface RaceEvent {
  category: string;
  driver_number: number;
  message: string;
  scope: string;
  session_key: number;
  date: string;
}

const useRaceControl = (session: number, trigger: number) =>
  useData<RaceEvent>(
    "/race_control",
    {
      params: {
        session_key: session,
      },
    },
    [session, trigger]
  );

export default useRaceControl;