import { FC } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Container } from "./style";

interface BackProps {
  onClick: () => void;
}

const Back: FC<BackProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <BsArrowLeft></BsArrowLeft>
    </Container>
  );
};

export default Back;
