import styled from "styled-components";

interface ContainerProps {
    index: number;
}

export const Container = styled.div<ContainerProps>`
  background: ${({index}) => index % 2 == 1 ? '#212227' : '#1b1c21'};
  padding: 16px 29px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

export const Home = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const TextHome = styled.div`
  width: 120px;
`;
export const TextAway = styled.div`
  width: 120px;
  text-align: right;
`;
export const Img = styled.img`
  width: 32px;
  height: 32px;
`;
export const Score = styled.div`
  background: rgba(245, 196, 81, 0.1);
  border-radius: 16px;
  color: #f5c451;
  width: 64px;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Away = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
`;
export const Center = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px 16px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #a4a4a4;
  & > *:hover {
    color: white;
    cursor: pointer;
  }
`;
export const DateMatch = styled.div`
  color: #a4a4a4;
`;