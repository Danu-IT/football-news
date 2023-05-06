import styled from "styled-components";

interface ContainerProps {
    euro?: string;
}

export const Container = styled.div<ContainerProps>`
    border-radius: 8px;
    background: ${({euro}) => euro?.includes('Champions League') ? "rgba(73, 64, 105, 0.4)" : euro?.includes('Europa League') ? '#412E2E;' : euro?.includes('Europa Conference League') && '#b83100'};
    display: flex;
    padding: 20px;
    margin-bottom: 8px;
    justify-content: space-between;
    height: 64px;
`

export const Club = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 334px;
`;
export const Count = styled.div`
  width: 16px;
`;
export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;
export const Name = styled.div``;
export const State = styled.div`
  display: flex;
  align-items: center;
  & > * {
    width: 60px;
    text-align: left;
  }
`;
export const Win = styled.div``;
export const Draw = styled.div``;
export const Lose = styled.div``;
export const Point = styled.div``;

export const Last = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;