import useData from "./useData";
export interface GrandPrix {
  meeting_key: number;
  circuit_short_name: string;
  year: number;
}

const useGrandPrix = (year?: Number) =>
  useData<GrandPrix>(
    "/meetings",
    {
      params: {
        year: year,
      },
    },
    [year]
  );

export default useGrandPrix;
