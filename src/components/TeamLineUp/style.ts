import styled from "styled-components";

interface StyleProps {
    isHome: boolean;
  }
  
  export const Container = styled.div`
    width: 302px;
    background: #1b1c21;
    border-radius: 16px;
    padding: 32px 22px;
    height: 571px;
  `;
  export const Position = styled.div<StyleProps>`
    color: ${({ isHome }) => (isHome ? "#36FF00" : "#F5C451")};
  `;
  export const Title = styled.div`
    text-align: center;
    font-size: 18px;
  `;
  export const Home = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;  
  `;
  export const Away = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;  
  `;
  export const Item = styled.div<StyleProps>`
    display: flex;
    justify-content: ${({ isHome }) => (isHome ? "flex-start" : "flex-end")};
    gap: 5px;
  `;
  export const Content = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  
  export const Line = styled.div`
    width: 90%;
    height: 1px;
    background-color: #a4a4a4;
    opacity: 0.2;
    display: flex;
    margin: 16px auto;
  `;