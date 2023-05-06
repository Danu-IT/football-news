import { FC } from "react";
import {
  Away,
  Center,
  Container,
  DateMatch,
  Home,
  Icons,
  Img,
  Left,
  Right,
  Score,
  TextAway,
  TextHome,
} from "./style";
import { formateData } from "../../../utils/formateData";
import { AiOutlineInfoCircle, AiOutlineLineChart } from "react-icons/ai";
import { EventsI } from "../../../interfaces/events";
import { useNavigate } from "react-router-dom";
interface MatchProps {
  item: EventsI;
  index: number;
}

const Match: FC<MatchProps> = ({ item, index }) => {
  let date = new Date(item.matchDate);
  const navigate = useNavigate();

  return (
    <Container index={index}>
      <Left>
        <Home>
          <Img
            src={item.teamHomeBadge}
            alt={item.matchHometeamName}
          />
          <TextHome>{item.matchHometeamName}</TextHome>
        </Home>
        <Score>
          {item.matchHometeamScore} - {item.matchAwayteamScore}
        </Score>
        <Away>
          <TextAway>{item.matchAwayteamName}</TextAway>
          <Img
            src={item.teamAwayBadge}
            alt={item.matchAwayteamName}
          />
        </Away>
      </Left>
      <Center>Full - Time</Center>
      <Right>
        <DateMatch>{formateData(+date)}</DateMatch>
        <Icons>
          <AiOutlineInfoCircle
            onClick={() =>
              navigate(`/match/:${item.matchId}`)
            }></AiOutlineInfoCircle>
          <AiOutlineLineChart></AiOutlineLineChart>
        </Icons>
      </Right>
    </Container>
  );
};

export default Match;
