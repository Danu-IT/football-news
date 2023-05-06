import styled from "styled-components";
import {  AiFillInfoCircle } from "react-icons/ai";
import { RiMenu4Line } from 'react-icons/ri';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #14151B;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px; 
    color: #A4A4A4;
    padding: 24px;
    height: 912px;
    & > * {
      & > *:hover{
        transition: color 0.5s;
        color: #F5C451;
        cursor: pointer;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px; 
    }
`

export const Menu = styled(RiMenu4Line)`

`

export const MenuBlock = styled.div`
  margin-bottom: 40px; 
  & > :hover{
    transition: color 0.5s !important;
    color: #F5C451 !important;
    cursor: pointer !important; 
  }
`

export const Line = styled.div`
  height: 1px;
  width: 24px;
  background-color: #a4a4a4;
`;

export const Info = styled(AiFillInfoCircle)`
  margin-top: 200px;
`;