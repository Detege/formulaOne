import { RaceEvent } from '../hooks/useRaceControl'

interface Props {
    update: RaceEvent
}

const RaceUpdateListItem = ({update}: Props) => {
    function toSentenceCase(str: string) {
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
    <div className='flex flex-col text-left py-2 px-4 bg-slate-300 bg-opacity-15 my-2 rounded-xl'>
        <h3 className='font-bold'>{update.category}</h3>
        <p>{update.scope}</p>
        <p>{toSentenceCase(update.message)}</p>
    </div>
  )
}

export default RaceUpdateListItem