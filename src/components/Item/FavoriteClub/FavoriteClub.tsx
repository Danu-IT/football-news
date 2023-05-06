import { FC } from "react";
import { StandingsI } from "../../../interfaces/standings";
import { AiFillStar } from "react-icons/ai";
import { Container, Icon, Text } from "./style";

export interface FavoriteClubProps {
  item: StandingsI;
}

const FavoriteClub: FC<FavoriteClubProps> = ({ item }) => {
  return (
    <Container>
      <Icon src={item.teamBadge}></Icon>
      <Text>{item.teamName}</Text>
      <AiFillStar color="#F5C451"></AiFillStar>
    </Container>
  );
};

export default FavoriteClub;
