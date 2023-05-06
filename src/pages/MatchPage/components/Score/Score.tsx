import { FC } from "react";
import { EventsI } from "../../../../interfaces/events";
import {
  BackgroundAway,
  BackgroundHome,
  Container,
  Mid,
  Midle,
  ScoreAway,
  ScoreHome,
  Title,
} from "./style";
import Team from "../Team/Team";

interface ScoreProps {
  match: EventsI | null;
}

const Score: FC<ScoreProps> = ({ match }) => {
  return (
    <Container>
      <BackgroundHome src={match?.teamHomeBadge}></BackgroundHome>
      <Title>{match?.matchStadium}</Title>
      <Team
        event={match}
        isHome={true}
      />
      <Midle>
        <ScoreHome>{match?.matchHometeamScore}</ScoreHome>
        <Mid>FT</Mid>
        <ScoreAway>{match?.matchAwayteamScore}</ScoreAway>
      </Midle>
      <Team
        event={match}
        isHome={false}
      />
      <BackgroundAway src={match?.teamAwayBadge}></BackgroundAway>
    </Container>
  );
};

export default Score;
