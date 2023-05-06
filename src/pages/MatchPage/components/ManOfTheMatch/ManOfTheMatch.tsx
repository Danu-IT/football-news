import { FC } from "react";
import { StatisticLineUp } from "../../../../interfaces/events";
import playerImg from "../../../../assets/Player/Image.png";
import shadowImg from "../../../../assets/Player/Shadow.png";
import backImg from "../../../../assets/Player/Back.png";
import { Container, Image, Name, Nation, Shadow, Title } from "./style";

interface ManOfTheMatchProps {
  player: StatisticLineUp;
}

const ManOfTheMatch: FC<ManOfTheMatchProps> = ({ player }) => {
  return (
    <Container>
      <Title>
        Man of The Match
        <Name>{player.lineup_player}</Name>
      </Title>
      <Shadow src={shadowImg}></Shadow>
      <Image src={playerImg}></Image>
      <Nation src={backImg}></Nation>
    </Container>
  );
};

export default ManOfTheMatch;
