import { Driver } from "../hooks/useDrivers";

interface Props {
  driver: Driver;
}

const DriverListItem = ({ driver }: Props) => {

  return (
    <li className="flex justify-between gap-x-6 py-1">
      <div
        className="flex min-w-0 gap-x-4 border-2 rounded-r-xl rounded-l-3xl pr-4"
        style={{borderColor: "#" + driver.team_colour}}
      >
        <img
          className="h-12 w-12 flex-none rounded-full"
          src={driver.headshot_url}
          style={{backgroundColor: "#" + driver.team_colour}}
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
              <p className="text-sm font-regular leading-5 text-white-900">
                {driver.full_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DriverListItem;
