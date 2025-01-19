import React from "react";
import { TooltipDiv, Wrapper } from "./styles";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => (
  <Wrapper>
    {children}
    <TooltipDiv>{content}</TooltipDiv>
  </Wrapper>
);
