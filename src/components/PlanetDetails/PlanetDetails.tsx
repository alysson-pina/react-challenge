import { useUsersTransactionsByPlanet } from "../../hooks/useUsersTransactions";
import { PlanetType } from "../../types";
import { formatNumber } from "../../utils/numbers";
import { formatString } from "../../utils/strings";
import { TransactionsTable } from "../TransactionsTable";
import { Title, SpinningWheel, Wrapper, PlanetDetailsWrapper, Info, Label } from "./styles";

interface Props {
  planet: PlanetType
}

const PlanetDetails = ({ planet }: Props) => {
  const { data, error, isFetching, status } = useUsersTransactionsByPlanet(planet.id);

  return (
    <Wrapper>
      <Title>{planet.name}</Title>
      <PlanetDetailsWrapper>
        <Info>Diameter: {formatNumber(Number(planet.diameter))}</Info>
        <Info>Population: {formatString(planet.population)}</Info>
        <Info>Rotation Period: {planet.rotation_period}</Info>
        <Info>Orbital Period: {planet.orbital_period}</Info>
        <Info>Climate: {planet.climate}</Info>
        <Info>Gravity: {planet.gravity}</Info>
      </PlanetDetailsWrapper>

      <Label>Total Transactions: {data?.transactions.length || 0}</Label>
      {isFetching ? <SpinningWheel /> : status === 'error' ? error.message : '' }
      {status === 'success' && data ? <TransactionsTable data={data.transactions} /> : ''}
    </Wrapper>
  )
};

export { PlanetDetails };
