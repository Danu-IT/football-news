import styled from "styled-components";

interface ContainerProps {
    isFollow?: boolean;
  }

export const ContainerIcon = styled.div<ContainerProps>`
  background: #1b1c21;
  min-width: 124px;
  width: 124px;
  height: 124px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  border: ${({isFollow}) => isFollow ? '1px solid #F5C451' : ''}
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
`;