import { Stint } from '../hooks/useStints'

interface Props {
    stint: Stint;
}

const StintsListItem = ({stint}:Props) => {
  return (
    <li>
        <p>Stint {stint.stint_number}</p>
        <p>Compound: {stint.compound}</p>
        <p>Tyre age at start: {stint.tyre_age_at_start}</p>
        <hr />
    </li>
  )
}

export default StintsListItem