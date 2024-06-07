import useData from "./useData";
import { Session } from "./useSessions";

const useLatestSessions = () =>
  useData<Session>("/sessions?session_key=latest");

export default useLatestSessions;