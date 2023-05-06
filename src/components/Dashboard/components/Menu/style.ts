import styled from "styled-components";

export const Container = styled.div`
    color: #A4A4A4;
`

export const Title = styled.div`
    margin-bottom: 40px;
`

export const Content = styled.div`
  & > * {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;