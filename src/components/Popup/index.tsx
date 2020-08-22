import React from 'react';
import { CloseCircle } from '../Icons';

import {
  Container,
  ModalHeader,
  ModalRow,
  ModalTitle,
  CloseModalButton,
  ModalContent,
} from './styles';

export interface PopupProps {
  title: string;
  onClickClose?(): void;
}

export const Popup: React.FC<PopupProps> = ({
  title,
  onClickClose,
  children,
}) => {
  return (
    <Container>
      <ModalHeader>
        <ModalRow>
          <ModalTitle>{title}</ModalTitle>
          <CloseModalButton onPress={onClickClose}>
            <CloseCircle size={24} />
          </CloseModalButton>
        </ModalRow>
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
    </Container>
  );
};
