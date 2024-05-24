import { SessionQuery } from "../App";
import useData from "./useData";

export interface Session {
    session_name: string;
    session_key: number | string;
}

const useSessions = (sessionQuery: SessionQuery) =>
  useData<Session>("/sessions",
    { params: {
      meeting_key: sessionQuery.gp?.meeting_key,
    }},
    [sessionQuery.gp?.meeting_key]
  );

export default useSessions;
