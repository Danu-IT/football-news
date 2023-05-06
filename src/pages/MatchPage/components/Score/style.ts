import styled from "styled-components";

export const Container = styled.div`
  background: #1b1c21;
  display: flex;
  justify-content: center;
  gap: 42px;
  font-size: 22px;
  border-radius: 16px;
  height: 222px;
  padding-top: 59px;
  position: relative;
  z-index: -1;
  overflow: hidden;
`;

export const Title = styled.div`
  position: absolute;
  top: 24px;
  font-size: 16px;
`;

export const Midle = styled.div`
  display: flex;
  padding-top: 4px;
  gap: 24px;
`;
export const ScoreHome = styled.div`
  font-size: 24px;
`;
export const ScoreAway = styled.div`
  font-size: 24px;
`;
export const Mid = styled.div`
  color: #a4a4a4;
  font-size: 16px;
  margin-top: 5px;
`;

export const BackgroundHome = styled.img`
  transform: matrix(-1, 0, 0, 1, 0, 0);
  position: absolute;
  left: -40px;
  top: -80px;
  width: 413px;
  height: 410px;
  height: 410px;
  object-fit: cover;
  opacity: 0.1;
`;
export const BackgroundAway = styled.img`
  position: absolute;
  right: -40px;
  top: -80px;
  width: 413px;
  height: 410px;
  height: 410px;
  object-fit: cover;
  opacity: 0.1;
`;
