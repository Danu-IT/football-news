import styled from "styled-components";
import { Button } from "../";
import { Container, Input, InputContainer, Right, Search } from "./style";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { BsSun } from "react-icons/bs";

const Header = ({}) => {
  return (
    <Container>
      <InputContainer>
        <Search></Search>
        <Input placeholder="Type to search..."></Input>
      </InputContainer>
      <Right>
        <Button>Go Premium</Button>
        <RiShoppingBasketLine size={20}></RiShoppingBasketLine>
        <BiBell size={20}></BiBell>
        <BsSun size={20}></BsSun>
      </Right>
    </Container>
  );
};

export default Header;
