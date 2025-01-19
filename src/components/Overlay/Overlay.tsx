import { useEffect } from "react";
import { CloseButton, OverlayContent, OverlayWrapper } from "./styles";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Overlay = ({ isVisible, onClose, children }: Props) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <OverlayWrapper $isVisible={isVisible} onClick={onClose}>
      <OverlayContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>x</CloseButton>
          {children}
      </OverlayContent>
    </OverlayWrapper>
  )
};
