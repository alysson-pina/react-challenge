import { Container, Loader } from "@mantine/core"
import styled from "styled-components"

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`

export const PlanetDetailsWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1em;
`;

export const Info = styled(Container)`
  @media (max-width: 767px) {
    width: unset;
  }

  width: 50%;
  color: #EBD71C;
  text-align: center;
  break-word
`;

export const SpinningWheel = styled(Loader)`
  display: flex;
  margin: 0 auto;
`

export const Title = styled.h1`
  display: flex;  
  justify-content: center;
  color: #EBD71C;
`

export const Label = styled.div`
  margin: 0 auto;
  color: #FFE81F;
`;
