import { Driver } from "../hooks/useDrivers";

interface Props {
  driver: Driver;
  selectedDriver: Driver;
}

const DriverListItem = ({ driver, selectedDriver }: Props) => {
  return (
    <li className="flex justify-between py-1.5">
      <div
        className={`flex min-w-0 gap-x-2 rounded-r-xl rounded-l-3xl w-full border-2
        ${selectedDriver.driver_number === driver.driver_number ? 'border-r-[5px]' : 'opacity-60'} `}
        style={{ borderColor: "#" + driver.team_colour }}
      >
        <img
          className="h-11 w-11 flex-none rounded-full"
          src={driver.headshot_url}
          style={{ backgroundColor: "#" + driver.team_colour }}
          alt=""
        />
        <div className="content-center">
          <div className="flex flex-row gap-x-1">
            <div>
              <p className="text-sm font-black leading-5 text-white-900">
                {driver.driver_number}
              </p>
            </div>
            <div>
              <p className="text-sm font-black leading-5 text-white-900">
                {driver.name_acronym}
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-sm text-nowrap font-regular leading-5 text-white-900">
                {driver.first_name + " " + driver.last_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DriverListItem;
