import useData from "./useData";

export interface Stint {
    compound: string;
    driver_number: number;
    tyre_age_at_start: number;
    stint_number: number;
}

// export interface Stints {
//     stint: Stint;
// }

const useStints = () => useData<Stint>("/stints?session_key=9502&driver_number=14");

export default useStints;
