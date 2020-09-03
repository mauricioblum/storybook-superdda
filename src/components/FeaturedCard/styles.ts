import styled from 'styled-components/native';

export const Container = styled.View<{ bgColor?: string }>`
  width: 100%;
  padding: 15px;
  justify-content: center;
  background-color: ${(props) => props.bgColor || '#f78c49'};
`;
