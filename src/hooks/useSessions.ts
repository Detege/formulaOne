import useData from "./useData";

export interface Session {
    session_name: string;
    session_key: number | string;
}

const useSessions = () =>
  useData<Session>("/sessions?country_name=Belgium&year=2023");

export default useSessions;
