import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px;
`;

export const Category = styled.div<{ color: string }>`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.color};
  transition: all 1000ms;
  font-size: 12px;
  overflow: hidden;
  outline: 2px solid ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color};
  font-weight: bold;
`;

