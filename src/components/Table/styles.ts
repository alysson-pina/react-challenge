import styled, { css } from "styled-components";

const Cell = css`
  border: 1px solid #ddd;
  padding: 8px;
  color: #FFE81F;

  @media (max-width: 1024px) {
    width: 33.333%;

    &:nth-last-child(1) {
      display: none;  /* Hide last column on medium screens */
    }
  }

  @media (max-width: 767px) {
    width: 50%;
  
    &:nth-last-child(-n+2) {
      display: none;  /* Hide last two columns on small screens */
    }
  }
`;

const FullWidth = css`
  display: flex;
  width: 100%;
`;

export const StyledTr = styled.tr`
  ${FullWidth};
`;

export const StyledTh = styled.th<{ $numColumns: number }>`
  ${Cell};

  width: ${({ $numColumns }) => 100 / $numColumns}%;
  flex-direction: column;
  align-items: flex-start;
  background-color: tomato;
`;

export const StyledTd = styled.td<{ $numColumns: number }>`
  ${Cell};

  width: ${({ $numColumns }) => 100 / $numColumns}%;
  word-break: break-word;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledDiv = styled.div`
  ${FullWidth};

  justify-content: space-between;
  flex-wrap: wrap;
`;
