import "./App.css";
import DriverListItem from "./components/DriverListItem";
import useDrivers from "./hooks/useDrivers";

function App() {
  const { data, error, isLoading } = useDrivers();
  if (error) return <p>error</p>;
  if (isLoading) return <p>loading</p>;
  return (
    <>
    <h1 className="text-xl font-bold pb-4">
      Drivers
    </h1>
    <ul>
      {data.map((driver) => (
        <DriverListItem key={driver.driver_number} driver={driver} />
      ))}
    </ul>
      </>
  );
}

export default App;
