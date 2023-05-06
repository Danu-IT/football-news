import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 0 30px 20px;
  & > * {
    display: flex;
    gap: 40px;
    cursor: pointer;
  }
`;

export const Text = styled.div`
  width: 123px;
`;

interface ItemProps {
  isActive: boolean;
}

export const Item = styled.div<ItemProps>`
  color: ${({ isActive }) => (isActive ? "white" : "gray")};
  position: relative;
`;

export const Line = styled.div`
  width: 1024px;
  height: 4px;
  background: #2e3034;
  margin: 10px 0 0 -20px;
`;
export const LineActive = styled.div<ItemProps>`
  position: absolute;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  background: #5742a9;
  width: 143px;
  height: 4px;
  bottom: -14px;
  left: -20px;
`;
