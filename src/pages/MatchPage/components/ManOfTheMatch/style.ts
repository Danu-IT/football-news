import styled from "styled-components";

export const Container = styled.div`
  background: #560617;
  position: relative;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  overflow: hidden;
`;

export const Name = styled.div`
  color: #f5c451;
`;
export const Title = styled.div`
  padding: 50px 32px;
  font-family: "Six Caps";
  font-style: normal;
  font-weight: 400;
  font-size: 144px;
  text-transform: uppercase;
`;
export const Shadow = styled.img`
  position: relative;
  z-index: 1;
`;
export const Nation = styled.img`
  position: absolute;
  object-fit: cover;
  bottom: 0px;
  height: 476px;
  right: -92px;
`;
export const Image = styled.img`
  position: absolute;
  right: 100px;
  bottom: 0px;
  z-index: 1;
`;