import { FC, useEffect } from "react";
import { Container, Title, Icon } from "./style";
import { LeagueI } from "../../../interfaces/league";
import { useLegues } from "../../../store/league";

export interface LeagueProps {
  item: LeagueI;
}

const League: FC<LeagueProps> = ({ item }) => {
  const { choiceLeagueId, changeLeagueId, leagues } = useLegues((state) => ({
    choiceLeagueId: state.choiceLeagueId,
    changeLeagueId: state.changeChoiceLeagueId,
    leagues: state.leagues,
  }));

  const handlerLeague = (id: string) => {
    changeLeagueId(id);
  };

  useEffect(() => {
    if (!choiceLeagueId) changeLeagueId(leagues[0].leagueId);
  }, []);

  return (
    <Container
      color={choiceLeagueId === item.leagueId ? "yellow" : "white"}
      onClick={() => handlerLeague(item.leagueId)}>
      <Icon
        src={item.leagueLogo}
        alt={item.leagueName}
      />
      <Title>{item.leagueName}</Title>
    </Container>
  );
};

export default League;
