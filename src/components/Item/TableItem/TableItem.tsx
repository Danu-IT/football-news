import {
  Club,
  Container,
  Count,
  Draw,
  Icon,
  Last,
  Lose,
  Name,
  Point,
  State,
  Win,
} from "./style";
import { FC, useEffect, useState } from "react";
import {
  AiFillCheckCircle,
  AiFillMinusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { StandingsI } from "../../../interfaces/standings";
import { List } from "../..";

interface TableItemProps {
  item: StandingsI;
}

const TableItem: FC<TableItemProps> = ({ item }) => {
  const [series, setSeries] = useState<string[]>([]);

  const createSeries = () => {
    setSeries([]);
    let win = Number(item.LeagueWin);
    let lose = Number(item.LeagueLose) + Number(item.LeagueWin);

    let draw =
      Number(item.LeagueDraw) +
      Number(item.LeagueLose) +
      Number(item.LeagueWin);

    for (let i = 0; i < 5; i++) {
      const random = Math.abs(Math.floor(Math.random() * (0 - draw) + 0));
      if (random <= win) {
        setSeries((prev) => [...prev, "win"]);
        win -= 1;
      } else if (random >= win && random <= lose) {
        setSeries((prev) => [...prev, "lose"]);
        lose -= 1;
      } else if (random >= lose && random <= draw) {
        setSeries((prev) => [...prev, "draw"]);
        draw -= 1;
      }
    }
  };

  useEffect(() => {
    createSeries();
  }, []);

  return (
    <Container euro={item.EuropeanСups}>
      <Club>
        <Count>{item.LeaguePosition}</Count>
        <Icon
          alt={item.teamName}
          src={item.teamBadge}></Icon>
        <Name>{item.teamName}</Name>
      </Club>
      <State>
        <Win>{item.LeagueWin}</Win>
        <Draw>{item.LeagueDraw}</Draw>
        <Lose>{item.LeagueLose}</Lose>
        <Point>{item.points}</Point>
      </State>
      <Last>
        <List
          items={series}
          renderItem={(el) =>
            el == "win" ? (
              <AiFillCheckCircle
                size={26}
                color="#36FF00"
              />
            ) : el == "draw" ? (
              <AiFillMinusCircle
                size={26}
                color="yellow"
              />
            ) : el == "lose" ? (
              <AiFillCloseCircle
                size={26}
                color="red"
              />
            ) : (
              ""
            )
          }></List>
      </Last>
    </Container>
  );
};

export default TableItem;
