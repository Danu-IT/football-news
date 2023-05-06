import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
   margin-top: 43px;
   color: #A4A4A4;
   cursor: pointer;
`

interface ArrowProps {
   isVisibleList: boolean;
 }

export const Arrow = styled(IoIosArrowDown)<ArrowProps>`
  transform: ${({ isVisibleList }) =>
    isVisibleList ? `rotate(0deg)` : `rotate(180deg)`};
  transition: transform 0.5s;
`;

export const Title = styled.div``;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  &:hover {
    transition: color 0.5s;
    color: white;
  }
`;
export const Content = styled.div``;