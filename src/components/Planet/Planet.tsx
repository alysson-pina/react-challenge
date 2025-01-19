import { PlanetType } from "../../types"

interface Props {
  planet: PlanetType;
}

export const Planet = ({ planet }: Props) => {
  return (
    <div>
      {planet.name}
    </div>
  )
}
