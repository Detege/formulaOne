import { Driver } from '../hooks/useDrivers';
import { Session } from '../hooks/useSessions';
import useStints from '../hooks/useStints'
import StintsListItem from './StintsListItem';

interface Props {
  selectedDriver:Driver | null;
  selectedSession:Session["session_key"];
}


const StintList = ({ selectedDriver, selectedSession }:Props) => {
    const { data, error, isLoading } = useStints(selectedDriver, selectedSession);

    if (error) return <p>error</p>;
  if (isLoading) return <p>loading</p>;
  return (
    <ul>
      {data.map((stint, index) => (
        <StintsListItem key={index} stint={stint} />
      ))}
    </ul>
  )
}

export default StintList