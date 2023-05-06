import { FC } from "react";
import Statistic from "../../../../components/Statistic/Statistic";
import { StatisticI } from "../../../../interfaces/events";
import { Container, Title } from "./style";

interface StatisticsProps {
  statistics: StatisticI[];
}

const Statistics: FC<StatisticsProps> = ({ statistics }) => {
  return (
    <Container>
      <Title>Team Statistic</Title>
      {statistics.slice(1, 8).map((el) => (
        <Statistic
          type={el.type}
          home={el.home}
          away={el.away}></Statistic>
      ))}
    </Container>
  );
};

export default Statistics;
