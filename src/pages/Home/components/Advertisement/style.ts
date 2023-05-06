import styled from "styled-components";

export const Container = styled.div`
    background: #1B1C21;
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
`

export const Left = styled.div`
  padding: 56px;
  width: 386px;
`;
export const Right = styled.img`
  border-radius: 24px;
  height: 350px;
  object-fit: cover;
`;
export const SubTitle = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #f5c451;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  margin: 8px 0 24px 0;
`;
export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 16px;
`;
export const Images = styled.div`
  display: flex;
  gap: 18px;
`;