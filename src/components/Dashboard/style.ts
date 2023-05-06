import styled from "styled-components";

interface ContainerProps {
    visible: boolean;
}

export const Container = styled.div<ContainerProps>`
    box-sizing: border-box;
    background: #1B1C21;
    position: fixed;
    left: ${({visible}) => visible ? '72px' : '-1000px'};
    z-index: -1;
    transition: 1s left;
    width: 278px;
    padding: 24px;
    border-width: 0px 1px 1px 0px;
    border-style: solid;
    border-color: #313131;
    height: 912px;
`

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 72px;
`;
export const LogoText = styled.div``;