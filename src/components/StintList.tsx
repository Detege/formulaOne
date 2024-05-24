import { SessionQuery } from '../App';
import { Driver } from '../hooks/useDrivers';
import useStints from '../hooks/useStints'
import StintsListItem from './StintsListItem';

interface Props {
  selectedDriver: Driver | null;
  sessionQuery: SessionQuery;
}


const StintList = ({ selectedDriver, sessionQuery }:Props) => {
    const { data, error, isLoading } = useStints(selectedDriver, sessionQuery);

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