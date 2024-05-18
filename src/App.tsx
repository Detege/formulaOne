import "./App.css";
import DriverListItem from "./components/DriverListItem";
import useDrivers from "./hooks/useDrivers";

function App() {
  const { data, error, isLoading } = useDrivers();
  if (error) return <p>error</p>;
  if (isLoading) return <p>loading</p>;
  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1">
          <h1 className="text-xl font-bold pb-4">Drivers</h1>
          <ul>
            {data.map((driver) => (
              <DriverListItem key={driver.driver_number} driver={driver} />
            ))}
          </ul>
        </div>
        <div className="col-span-3">01</div>
        <div className="col-span-2">01</div>
      </div>
    </>
  );
}

export default App;
