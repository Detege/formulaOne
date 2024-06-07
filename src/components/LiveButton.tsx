interface Props {
  toggleState: () => void;
}

const LiveButton = ({ toggleState }: Props) => {
  return (
    <button
      onClick={toggleState}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Live/Last
    </button>
  );
};

export default LiveButton;
