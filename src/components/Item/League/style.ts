import styled from "styled-components";

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
  color: ${({color}) => color};
  &:hover{
    opacity: 0.5;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;`;
export const Title = styled.div``;