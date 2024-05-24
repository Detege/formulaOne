
import { SessionQuery } from '../App';
import { Gp } from '../hooks/useGrandPrix';
import { Session } from '../hooks/useSessions';
import GpSelector from './GpSelector';
import LiveButton from './LiveButton';
import SessionSelector from './SessionSelector'
import YearSelector from './YearSelector'

interface Props {
    onSelectYear: (year: number) => void;
    onSelectGp: (go: Gp) => void;
    onSelectSession: (session: Session["session_key"]) => void;
    sessionQuery: SessionQuery
    toggleState: () => void;
}


const FilterMenu = ({onSelectYear, onSelectGp, onSelectSession, sessionQuery, toggleState}:Props) => {
    
  return (
    <>
    <YearSelector onSelectYear={onSelectYear} />
    <GpSelector sessionQuery={sessionQuery} onSelectGp={onSelectGp} />
    <SessionSelector sessionQuery={sessionQuery} onSelectSession={onSelectSession} />
    <LiveButton toggleState={toggleState} />
    </>

  );
};

export default FilterMenu