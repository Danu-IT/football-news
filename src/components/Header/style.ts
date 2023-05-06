import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const Container = styled.div`
    background: #1B1C21;
    display: flex;
    justify-content: space-between;
    padding-right: 24px;
    border-bottom: 1px solid #313131;
`

export const InputContainer = styled.div`
  position: relative;
  padding: 15px 22px;
  color: #A4A4A4;
`;

export const Search = styled(BsSearch)`
  position: absolute;
  top: 25px;
  left: 35px;
`;

export const Input = styled.input`
  width: 548px;
  height: 36px;
  background: #2E3034;
  color: #A4A4A4;
  border-radius: 6px;
  padding: 5px 45px;
  border-radius: 6px;
  border: none;
  outline: none;
  &::placeholder {
    color: #A4A4A4;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  & > *:hover {
    transition: color 0.5s;
    color: #f5c451;
  }
`;