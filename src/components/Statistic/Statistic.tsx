import { FC, useMemo } from "react";
import {
  ActiveAway,
  ActiveHome,
  Away,
  Container,
  Content,
  Home,
  NumAway,
  NumHome,
  Title,
} from "./style";

interface StatisticProps {
  home: string;
  away: string;
  type: string;
}

const Statistic: FC<StatisticProps> = ({ home, away, type }) => {
  const full = useMemo(
    () => Number(home.slice(0, 2)) + Number(away.slice(0, 2)),
    [home, away]
  );
  const homeP = useMemo(() => (Number(home.slice(0, 2)) / full) * 100, [home]);
  const awayP = useMemo(() => (Number(away.slice(0, 2)) / full) * 100, [away]);

  return (
    <Container>
      <Title>{type}</Title>
      <Content>
        <Home>
          <NumHome>{home}</NumHome>
          <ActiveHome percent={homeP}></ActiveHome>
        </Home>
        <Away>
          <NumAway>{away}</NumAway>
          <ActiveAway percent={awayP}></ActiveAway>
        </Away>
      </Content>
    </Container>
  );
};

export default Statistic;
