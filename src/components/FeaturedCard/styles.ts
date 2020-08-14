import styled from 'styled-components/native';

export const Container = styled.View<{ bgColor?: string }>`
  flex: 1;
  width: 100%;
  padding: 15px;
  justify-content: center;
  background-color: ${(props) => props.bgColor || '#f78c49'};
`;
