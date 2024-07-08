import useLaps from "../hooks/UseLaps";
import { Driver } from "../hooks/useDrivers";

interface Props {
  selectedSession: number;
  selectedDriver: Driver;
}

const LapTimes = ({ selectedSession, selectedDriver }: Props) => {
  const { data } = useLaps(selectedSession, selectedDriver);
  const lapNo: number = data.length - 1;

  let lastLap = null;
  const formatTime = (timeInSeconds: number) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      const milliseconds = Math.round((timeInSeconds % 1) * 100);
      
      return `${minutes}.${seconds < 10 ? '0' : ''}${seconds},${milliseconds < 10 ? '0' : ''}${milliseconds}`;
    };
    
    if(lapNo >= 0){
        lastLap = data[lapNo];
        console.log(lapNo);
    }

  if(lastLap === null){
    return(
        <p>Loading</p>
    )
  }
  
  return (
    <>
      <h3 className="font-bold mr-3">Lap number {lastLap.lap_number}</h3>
      <p>Last Lap: {formatTime(lastLap.lap_duration)}</p>

      <p>Max speed recorded: {lastLap.st_speed}kmh</p>
    </>
  );
};

export default LapTimes;
