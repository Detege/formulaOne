import { Stint } from '../hooks/useStints'

interface Props {
    stint: Stint;
}

const StintsListItem = ({stint}:Props) => {
  const numberOfLaps = stint.lap_end - stint.lap_start;
  return (
    <li className='flex flex-col items-start'>
      <div className='flex'>
        <h3 className='font-bold mr-3'>Stint {stint.stint_number}</h3> 
        <p>{stint.lap_end ? numberOfLaps + ' laps' : 'Currently running'}</p>
      </div>
        <p>Compound: {stint.compound}</p>
        <p>Tyre age at start: {stint.tyre_age_at_start}</p>
        <hr className='self-stretch my-2'/>
    </li>
  )
}

export default StintsListItem