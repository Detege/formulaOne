import { Driver } from '../hooks/useDrivers';
import useStints from '../hooks/useStints'
import StintsListItem from './StintsListItem';

interface Props {
  selectedDriver:Driver | null;
}


const StintList = ({ selectedDriver }:Props) => {
    const { data, error, isLoading } = useStints(selectedDriver);

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