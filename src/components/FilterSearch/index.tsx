import React, { useState, useEffect, useRef } from 'react';
import {
  TextInput,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
} from 'react-native';
import { SearchIcon } from '../Icons';

import {
  Container,
  LetterButton,
  SearchBar,
  SearchButton,
  LettersText,
  OrderText,
} from './styles';

export interface FilterSearchProps {
  disabled?: boolean;
  orderText?: string;
  searchValue: string;
  onClickAsc?: () => void;
  onClickDesc?: () => void;
  onSearchIconClick?: () => void;
  onSearch: (text: string) => void;
  onChangeSearchValue: (value: string) => void;
}

export const FilterSearch: React.FC<FilterSearchProps> = ({
  // disabled = false,
  orderText = 'Ordernar por',
  searchValue,
  onClickAsc,
  onClickDesc,
  onSearch,
  onSearchIconClick,
  onChangeSearchValue,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (searchOpen === true) {
      textInputRef.current?.focus();
    }
  }, [searchOpen]);

  const handleValueChange = (text: string): void => {
    onChangeSearchValue(text);
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ): void => {
    if (e.nativeEvent.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  const handleSearchIconClick = (): void => {
    setSearchOpen(!searchOpen);
    onSearchIconClick && onSearchIconClick();
  };

  return (
    <Container>
      <OrderText>{orderText}: </OrderText>
      <LetterButton onPress={onClickAsc}>
        <LettersText>A-Z |</LettersText>
      </LetterButton>
      <LetterButton onPress={onClickDesc}>
        <LettersText>Z-A |</LettersText>
      </LetterButton>
      <SearchBar>
        <SearchButton onPress={() => handleSearchIconClick()}>
          <SearchIcon />
        </SearchButton>
        {searchOpen && (
          <TextInput
            ref={textInputRef}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyLabel="Pesquisar"
            style={{
              height: 20,
              borderColor: '#727272',
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              marginLeft: 5,
              minWidth: 60,
            }}
            onEndEditing={() => onSearch(searchValue)}
            onChangeText={(text) => handleValueChange(text)}
            onKeyPress={(e) => handleKeyPress(e)}
            value={searchValue}
          />
        )}
      </SearchBar>
    </Container>
  );
};
