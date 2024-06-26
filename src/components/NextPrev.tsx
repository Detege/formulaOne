import { ItemsRange } from "./RaceInfo";

interface Props {
    RaceUpdates: number;
    onNext: () => void;
    onPrev: () => void;
    itemsRange: ItemsRange
  }
  
  const LiveButton = ({ RaceUpdates, onNext, onPrev, itemsRange }: Props) => {
    return (
        <div className="flex w-full">
        {itemsRange.start > 0 &&
            <button
                onClick={onPrev}
                className="mr-auto rounded-md px-2 py-1 text-sm font-semibold hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 focus-within:outline-none"
            >
                Previous
            </button>
        } 
        {itemsRange.end < RaceUpdates &&
            <button
                onClick={onNext}
                className="ml-auto rounded-md px-2 py-1 text-sm font-semibold hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 focus-within:outline-none"
            >
                Next
            </button>
        }
        </div>
    );
  };
  
  export default LiveButton;
  