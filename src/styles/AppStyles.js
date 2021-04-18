import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #232323;
  margin: 12px;
`;

export const Container = styled.div`
  background-color: #d3d3d3;
  border-radius: 2px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  max-width: 960px;

  input {
    border: 1px solid #444444;
    padding: 5px;
  }
`;

export const ButtonAdd = styled.button`
  border: 1px solid #444444;
  padding: 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
  }
`;
