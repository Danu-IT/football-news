import styled from "styled-components";

export interface StyleProps {
    percent: number;
  }
  
  export const Container = styled.div``;
  export const Title = styled.div`
    text-align: center;
    padding: 16px 0 20px 0;
  `;
  export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  export const Home = styled.div`
    width: 123px;
    height: 4px;
    background: #3a3a3a;
    border-radius: 3px;
    position: relative;
  `;
  export const Away = styled.div`
    width: 123px;
    height: 4px;
    background: #3a3a3a;
    border-radius: 3px;
    position: relative;
  `;
  export const ActiveHome = styled.div<StyleProps>`
    position: absolute;
    background: #36ff00;
    border-radius: 3px;
    width: ${({ percent }) => `${percent}%`};
    height: 4px;
    right: 0;
  `;
  export const ActiveAway = styled.div<StyleProps>`
    position: absolute;
    background: #f5c451;
    border-radius: 3px;
    width: ${({ percent }) => `${percent}%`};
    height: 4px;
  `;
  export const NumHome = styled.div`
    position: absolute;
    top: -25px;
  `;
  
  export const NumAway = styled.div`
    position: absolute;
    top: -25px;
    right: 0;
  `;