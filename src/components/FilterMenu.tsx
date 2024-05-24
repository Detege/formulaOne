
import { SessionQuery } from '../App';
import { Gp } from '../hooks/useGrandPrix';
import { Session } from '../hooks/useSessions';
import GpSelector from './GpSelector';
import SessionSelector from './SessionSelector'
import YearSelector from './YearSelector'

interface Props {
    onSelectYear: (year: number) => void;
    onSelectGp: (go: Gp) => void;
    onSelectSession: (session: Session["session_key"]) => void;
    sessionQuery: SessionQuery
}


const FilterMenu = ({onSelectYear, onSelectGp, onSelectSession, sessionQuery}:Props) => {
    
  return (
    <>
    <YearSelector onSelectYear={onSelectYear} />
    <GpSelector sessionQuery={sessionQuery} onSelectGp={onSelectGp} />
    <SessionSelector sessionQuery={sessionQuery} onSelectSession={onSelectSession} />
    </>

  );
};

export default FilterMenu