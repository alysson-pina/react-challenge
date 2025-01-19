import styled from "styled-components";

export const OverlayWrapper = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const OverlayContent = styled.div`
  position: relative;  
  background: rgba(0, 51, 153, 0.9);
  border-radius: 8px;
  padding: 20px;
  width: 60%;
  min-width: 320px;
  max-height: 90%;
  overflow-y: auto;

  @media (max-width: 767px) {
    width: 100%;
  }
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: lightgrey;

  &:hover {
    color: red;
  }

  @media (max-width: 767px) {
    position: fixed;
    top: 50px;
    right: 10px;
  }
`;
