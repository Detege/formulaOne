import useStints from '../hooks/useStints'
import StintsListItem from './StintsListItem';


const StintList = () => {
    const { data, error, isLoading } = useStints();

    if (error) return <p>error</p>;
  if (isLoading) return <p>loading</p>;
  return (
    <ul>
      {data.map((stint) => (
        <StintsListItem key={stint.stint_number} stint={stint} />
      ))}
    </ul>
  )
}

export default StintList