import { FC, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Back from "../../components/Back/Back";
import { useEvents } from "../../store/event";
import { Container, Graph } from "./style";
import { Score } from "./";
import Statistics from "./components/Statistics/Statistics";
import TeamLineUp from "../../components/TeamLineUp/TeamLineUp";
import Location from "./components/Location/Location";
import ManOfTheMatch from "./components/ManOfTheMatch/ManOfTheMatch";
import { EventLineUp } from "../../interfaces/events";

interface MatchPageProps {}

const MatchPage: FC<MatchPageProps> = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.pathname.split("/")[2].slice(1);
  const systemMoke = "4-3-3";

  const { fetchEvent, match } = useEvents((state) => ({
    match: state.match,
    fetchEvent: state.fetchEvent,
  }));

  const winnerPlace = useMemo(() => {
    return Number(match?.matchHometeamScore) > Number(match?.matchAwayteamScore)
      ? "home"
      : "away";
  }, []);

  const randomPickPlayer = (lineup: EventLineUp) => {
    const random = Math.floor(Math.random() * (11 - 1) + 1);
    let player;
    if (winnerPlace === "away") {
      player = lineup.away.starting_lineups[random];
    } else {
      player = lineup.home.starting_lineups[random];
    }
    return player;
  };

  useEffect(() => {
    fetchEvent(id);
  }, []);

  return (
    <Container>
      <Back onClick={() => navigate(-1)}></Back>
      <Score match={match}></Score>
      {match?.lineup && (
        <ManOfTheMatch player={randomPickPlayer(match.lineup)}></ManOfTheMatch>
      )}
      <Graph>
        {match && (
          <Location
            match={match}
            system={systemMoke}></Location>
        )}
        {match && <Statistics statistics={match.statistics}></Statistics>}
        {match?.lineup && (
          <TeamLineUp
            system={systemMoke}
            lineUp={match.lineup}></TeamLineUp>
        )}
      </Graph>
    </Container>
  );
};

export default MatchPage;
