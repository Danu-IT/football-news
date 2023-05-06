import { FC, useCallback } from "react";
import { EventLineUp, StatisticLineUp } from "../../interfaces/events";
import {
  Container,
  Content,
  Home,
  Line,
  Position,
  Title,
  Item,
  Away,
} from "./style";

interface TeamLineUpProps {
  lineUp: EventLineUp;
  system: string;
}

const TeamLineUp: FC<TeamLineUpProps> = ({ lineUp, system }) => {
  const filteredLineUp = (lineup: StatisticLineUp[]) => {
    return lineup.sort(
      (a, b) => Number(a.lineup_position) - Number(b.lineup_position)
    );
  };

  const positionPlayer = useCallback((system: string, position: string) => {
    const systemI = system.split("-").join("");
    if (position === "1") return `GK`;
    else if (Number(position) <= Number(systemI[0]) + 1) return `DF`;
    else if (Number(position) <= Number(systemI[0]) + Number(systemI[1]) + 1)
      return "MF";
    else if (
      Number(position) <=
      Number(systemI[0]) + Number(systemI[1]) + Number(systemI[2]) + 1
    )
      return "FW";
  }, []);

  return (
    <Container>
      <Title>Team Line Up</Title>
      <Line></Line>
      <Content>
        <Home>
          {filteredLineUp(lineUp.home.starting_lineups).map((el) => (
            <Item isHome={true}>
              <Position isHome={true}>
                {positionPlayer(system, el.lineup_position)}
              </Position>
              {el.lineup_player.slice(0, -2).slice(0, 8)}
            </Item>
          ))}
        </Home>
        <Away>
          {filteredLineUp(lineUp.away.starting_lineups).map((el) => (
            <Item isHome={false}>
              {el.lineup_player.slice(0, -2).slice(0, 8)}
              <Position isHome={false}>
                {positionPlayer(system, el.lineup_position)}
              </Position>
            </Item>
          ))}
        </Away>
      </Content>
    </Container>
  );
};

export default TeamLineUp;
