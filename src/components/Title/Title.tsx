import { FC } from "react";
import { Container } from "./style";

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Title;
