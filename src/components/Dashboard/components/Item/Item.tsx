import React from "react";
import { FC } from "react";
import { IconType } from "react-icons";
import { Container } from "./style";

interface ItemProps {
  Icon: IconType;
  text: string;
}

const Item: FC<ItemProps> = ({ Icon, text }) => {
  return (
    <Container>
      <Icon></Icon>
      <div>{text}</div>
    </Container>
  );
};

export default Item;
