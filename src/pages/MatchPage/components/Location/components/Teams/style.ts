import styled from "styled-components";

export interface StyledProps {
    index?: number;
    isHome?: boolean;
    position?: string;
  }
  
  export const Container = styled.div``;
  export const Circle = styled.div<StyledProps>`
    width: 31px;
    height: 31px;
    background: ${({ isHome }) => (isHome ? " #ff0000" : "#FAE042")};
    color: ${({ isHome }) => (isHome ? "white" : "#100F0F;")}
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  export const Item = styled.div<StyledProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: ${({ index }) => (index == 1 ? "67px" : index == 2 ? "56px" : "107px")};
  `;
  export const Plan = styled.div`
    position: relative;
  `;
  
  export const HomeTeam = styled.div`
    position: absolute;
    top: 27px;
    left: 45px;
    display: flex;
    align-items: center;
    gap: 30px;
  `;
  export const AwayTeam = styled.div`
    position: absolute;
    top: 27px;
    right: 45px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 30px;
  `;
  
  export const Up = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px 0 32px 0;
  `;
  export const Icon = styled.img`
    width: 45px;
    height: 45px;
  `;
  export const Home = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `;
  export const Name = styled.div`
    font-size: 16px;
  `;
  export const System = styled.div`
    color: #a4a4a4;
    font-size: 16px;
  `;
  export const Info = styled.div`
    display: flex;
    flex-direction: column;
  `;
  export const Away = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `;
  export const Field = styled.img``;