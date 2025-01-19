import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const TooltipDiv = styled.div`
  visibility: hidden;
  width: 200px;
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 8px;
  border-radius: 5px;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  ${Wrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
