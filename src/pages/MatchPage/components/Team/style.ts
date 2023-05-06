import styled from "styled-components";

interface StyleProps {
    isHome?: boolean;
  }
  
  export const Container = styled.div<StyleProps>`
    width: 171px;
    text-align: ${({ isHome }) => (isHome ? "left" : "right")};
  `;
  export const TeamContainer = styled.div`
    margin-bottom: 24px;
  `;
  export const Image = styled.img`
    width: 40px;
    height: 40px;
  `;
  export const TeamName = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    gap: 16px;
    flex-direction: ${({ isHome }) => (isHome ? "row" : "row-reverse")};
  `;
  
  export const ScorePlayer = styled.div``;
  
  export const Item = styled.div`
    color: #a4a4a4;
    font-size: 14px;
    margin-bottom: 12px;
  `;