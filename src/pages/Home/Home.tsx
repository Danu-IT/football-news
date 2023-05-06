import { Title } from "../../components";
import { Container, Line } from "./style";
import { useLegues } from "../../store/league";
import { useMemo, useEffect } from "react";
import { Table } from "./";
import { useStandings } from "../../store/standings";
import { FollowClub } from "./";
import { useСountries } from "../../store/country";
import Shoping from "./components/Shoping/Shoping";
import { formateDataApiToAndFrom } from "../../utils/formateData";
import { useEvents } from "../../store/event";
import Matches from "./components/Mathes/Matches";
import Advertisement from "./components/Advertisement/Advertisement";
import Filter from "../../components/Filter/Filter";
import { useFilter } from "../../store/filter";

const Home = () => {
  const { leagues, choiceLeagueId } = useLegues((state) => ({
    leagues: state.leagues,
    choiceLeagueId: state.choiceLeagueId,
  }));

  const countries = useСountries((state) => state.countries); // Страны

  const fetchEvents = useEvents((state) => state.fetchEvents);

  const league = useMemo(() => {
    return leagues.filter((el) => {
      if (el.leagueId === choiceLeagueId) return true;
      return false;
    });
  }, [choiceLeagueId]);

  const { fetchStandings, standings } = useStandings((state) => ({
    fetchStandings: state.fetchStandings,
    standings: state.standings,
  }));

  const { filter, changeFilter } = useFilter((state) => ({
    filter: state.filter,
    changeFilter: state.changeFilter,
  }));

  useEffect(() => {
    fetchStandings(choiceLeagueId);
  }, [countries, choiceLeagueId]);

  useEffect(() => {
    let event;
    filter.forEach((e) => {
      if (e.active === true) {
        event = e.event;
      }
    });
    if (event === "past") {
      fetchEvents(
        choiceLeagueId,
        formateDataApiToAndFrom(7),
        formateDataApiToAndFrom(1)
      );
    } else if (event === "future") {
      fetchEvents(
        choiceLeagueId,
        formateDataApiToAndFrom(0),
        formateDataApiToAndFrom(-7)
      );
    }
  }, [choiceLeagueId, standings, filter, countries]);

  return (
    <Container>
      <Title text="⚽ Football Match"></Title>
      <Filter
        filter={filter}
        changeFilter={changeFilter}></Filter>
      <Matches></Matches>
      <Line></Line>
      <Title text="🏆 Standings"></Title>
      <Table league={league[0]}></Table>
      <Line></Line>
      <Title text="🎮 Follow Club"></Title>
      <FollowClub></FollowClub>
      <Line></Line>
      <Title text="👕 Shopping"></Title>
      <Shoping></Shoping>
      <Advertisement></Advertisement>
    </Container>
  );
};

export default Home;
