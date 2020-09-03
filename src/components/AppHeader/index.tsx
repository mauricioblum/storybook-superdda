import React from 'react';

import { Container, AppTitle, AppButtonsWrapper, AppButton } from './styles';
import { SearchIcon, BarcodeIcon } from '../Icons';

export interface AppHeaderProps {
  title: string;
  titleColor?: string;
  onClickScanBarcode?(): void;
  onClickSearch?(): void;
  barcodeIcon?: JSX.Element;
  searchIcon?: JSX.Element;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  titleColor,
  onClickScanBarcode,
  onClickSearch,
  barcodeIcon,
  searchIcon,
}) => {
  return (
    <Container>
      <AppTitle color={titleColor}>{title}</AppTitle>
      <AppButtonsWrapper>
        <AppButton onPress={onClickScanBarcode} style={{ marginRight: 2 }}>
          {barcodeIcon || <BarcodeIcon />}
        </AppButton>
        <AppButton onPress={onClickSearch}>
          {searchIcon || <SearchIcon color="#000" size={26} />}
        </AppButton>
      </AppButtonsWrapper>
    </Container>
  );
};
