import { useState } from "react";
import usePolling from "../hooks/usePolling";
import NextPrev from "./NextPrev";
import RaceUpdateListItem from "./RaceUpdateListItem";
import Loading from "./Loading";

interface Props {
  selectedSession: number;
}

export interface ItemsRange {
  start: number;
  end: number;
}

const RaceInfo = ({ selectedSession }: Props) => {
  const { raceData } = usePolling(selectedSession, 3000);
  const [itemsRange, setItemsRange] = useState<ItemsRange>({
    start: 0,
    end: 10,
  });

  const handleChangePrev = () => {
    setItemsRange({
      ...itemsRange,
      start: itemsRange.start - 10,
      end: itemsRange.end - 10,
    });
  };
  const handleChangeNext = () => {
    setItemsRange({
      ...itemsRange,
      start: itemsRange.start + 10,
      end: itemsRange.end + 10,
    });
  };

  const selectedRaceUpdates =
    raceData &&
    raceData
      .filter((update) => update.session_key === selectedSession)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Using getTime() for numeric comparison

  const slicedRaceUpdates = selectedRaceUpdates?.slice(
    itemsRange.start,
    itemsRange.end
  );
  return (
    <>
    {selectedRaceUpdates ? (
      <NextPrev
        RaceUpdates={selectedRaceUpdates.length}
        itemsRange={itemsRange}
        onPrev={handleChangePrev}
        onNext={handleChangeNext}
      />
    ):(
      <Loading />)
      }
      <ul>
        {slicedRaceUpdates?.map((update, index) => (
          <RaceUpdateListItem key={index} update={update} />
        ))}
      </ul>
    </>
  );
};

export default RaceInfo;
