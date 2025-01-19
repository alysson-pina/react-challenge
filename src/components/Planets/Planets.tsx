
import { usePlanets } from "../../hooks/usePlanets";
import { PlanetsTable } from "../PlanetsTable";
import { SpinningWheel, Wrapper } from "./styles";

export const Planets = () => {
  const { data, error, isFetching, status } = usePlanets();

  return (
    <Wrapper>
      {isFetching ? <SpinningWheel /> : status === 'error' ? error.message : '' }
      {status === 'success' && data ? <PlanetsTable data={data.planets} /> : ''}
    </Wrapper>
  )
}
