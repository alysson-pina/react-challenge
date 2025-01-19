
import { useCallback, useState } from "react";
import { PlanetType } from "../../types"
import { Table } from "../Table/Table";
import { Title, Wrapper } from "./styles";
import { PlanetDetails } from "../PlanetDetails";
import { Overlay } from "../Overlay";
import { Search } from "../../icons/Search";

interface Props {
  data: PlanetType[];
}

const COLUMNS = ['name', 'terrain', 'climate', 'population'] as const;
const ICONS = Object.fromEntries(
  COLUMNS.slice(0,3).map((column) => ([column, <Search />]))
);

export const PlanetsTable = ({ data } : Props) => {
  const [searchWord, setSearchWord] = useState({ name: '', terrain: '', climate: '' });
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetType | null>(null);

  const handleRowClick = useCallback((row: Object) => {
    setSelectedPlanet(row as PlanetType);
  }, []);

  const handleSearch = (word: string, key: keyof PlanetType ) => setSearchWord((prev) => ({ ...prev, [key]: word }));

  const closeOverlay = () => {
    setSelectedPlanet(null);
  };

  return (
    <Wrapper>
      <Title>Planets</Title>
      <Table columns={COLUMNS} icons={ICONS} data={data} onRowClick={handleRowClick} searchWords={searchWord} onSearch={handleSearch} />
      <Overlay isVisible={!!selectedPlanet} onClose={closeOverlay}>
        {selectedPlanet && <PlanetDetails planet={selectedPlanet} />}
      </Overlay>
    </Wrapper>
  );
}
