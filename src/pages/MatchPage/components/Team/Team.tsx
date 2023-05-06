import { FC } from "react";
import { EventsI } from "../../../../interfaces/events";

import {
  Container,
  Image,
  Item,
  ScorePlayer,
  TeamContainer,
  TeamName,
} from "./style";

interface TeamProps {
  isHome: boolean;
  event: EventsI | null;
}
const Team: FC<TeamProps> = ({ isHome, event }) => {
  return (
    <Container isHome={isHome}>
      <TeamContainer>
        <TeamName isHome={isHome}>
          <Image
            src={isHome ? event?.teamHomeBadge : event?.teamAwayBadge}></Image>
          {isHome ? event?.matchHometeamName : event?.matchAwayteamName}
        </TeamName>
      </TeamContainer>
      <ScorePlayer>
        {event?.goalscorer.map((el) => {
          let homeScore;
          let awayScore;
          if (el.home_scorer) homeScore = `${el.home_scorer}  ${el.time}'`;
          if (el.away_scorer) awayScore = `${el.away_scorer}  ${el.time}'`;
          return <Item>{isHome ? homeScore : awayScore}</Item>;
        })}
      </ScorePlayer>
    </Container>
  );
};

export default Team;
