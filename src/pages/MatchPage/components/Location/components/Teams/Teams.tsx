import { FC } from "react";
import styled from "styled-components";
import { EventsI, StatisticLineUp } from "../../../../../../interfaces/events";
import field from "../../../../../../assets/FormationTeam/Line.png";
import {
  Away,
  AwayTeam,
  Circle,
  Container,
  Field,
  Home,
  HomeTeam,
  Icon,
  Info,
  Item,
  Name,
  Plan,
  System,
  Up,
} from "./style";

interface TeamsProps {
  match: EventsI;
  system: string;
}

const Teams: FC<TeamsProps> = ({ match, system }) => {
  const splitArray = (list: StatisticLineUp[], system: string) => {
    const systenCustom = system.split("-").join("");
    const goalkeeper = list.slice(0, 1);
    const defenfer = list.slice(1, Number(systenCustom[0]) + 1);
    const midfield = list.slice(
      Number(systenCustom[0]) + 1,
      Number(systenCustom[0]) + Number(systenCustom[1]) + 1
    );
    const attack = list.slice(
      Number(systenCustom[0]) + Number(systenCustom[1]) + 1,
      Number(systenCustom[0]) +
        Number(systenCustom[1]) +
        Number(systenCustom[2]) +
        1
    );
    return [goalkeeper, defenfer, midfield, attack];
  };

  return (
    <Container>
      <Up>
        <Home>
          <Icon
            src={match.teamHomeBadge}
            alt={match.matchHometeamName}
          />
          <Info>
            <Name>{match.matchHometeamName}</Name>
            <System>{system}</System>
          </Info>
        </Home>
        FT
        <Away>
          <Info>
            <Name>{match.matchAwayteamName}</Name>
            <System>{system}</System>
          </Info>
          <Icon
            src={match.teamAwayBadge}
            alt={match.matchAwayteamName}
          />
        </Away>
      </Up>
      <Plan>
        <Field src={field}></Field>
        <HomeTeam>
          {match.lineup &&
            splitArray(match.lineup.home.starting_lineups, system).map(
              (el, i) => (
                <Item index={i}>
                  {el.map((item) => (
                    <Circle
                      isHome={true}
                      position={item.lineup_position}>
                      {item.lineup_number}
                    </Circle>
                  ))}
                </Item>
              )
            )}
        </HomeTeam>
        <AwayTeam>
          {match.lineup &&
            splitArray(match.lineup.away.starting_lineups, system).map(
              (el, i) => (
                <Item index={i}>
                  {el.map((item) => (
                    <Circle
                      isHome={false}
                      position={item.lineup_position}>
                      {item.lineup_number}
                    </Circle>
                  ))}
                </Item>
              )
            )}
        </AwayTeam>
      </Plan>
    </Container>
  );
};

export default Teams;
