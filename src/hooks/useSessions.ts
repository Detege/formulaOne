import useData from "./useData";
export interface Session {
  session_key: number;
  year: number;
  meeting_key: number;
  session_type: string;
}

const useSessions = (grandPrixKey?: number) =>
  useData<Session>(
    "/sessions",
    {
      params: {
        meeting_key: grandPrixKey,
      },
    },
    [grandPrixKey]
  );

export default useSessions;
