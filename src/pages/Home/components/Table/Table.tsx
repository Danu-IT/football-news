import { FC, useState } from "react";
import {
  Bottom,
  Circle,
  Club,
  Container,
  Flag,
  Icon,
  Images,
  Info,
  Logo,
  Middle,
  Name,
  State,
  TableBlock,
  Text,
  Title,
  Top,
  View,
} from "./style";
import { LeagueI } from "../../../../interfaces/league";
import { useStandings } from "../../../../store/standings";
import { List, TableItem } from "../../../../components";

interface TableProps {
  league: LeagueI;
}

const Table: FC<TableProps> = ({ league }) => {
  const [hover, setHover] = useState(false);
  const hoverElement = () => setHover(true);
  const noHoverElement = () => setHover(false);

  const standings = useStandings((state) => state.standings);

  return (
    <Container>
      {league && (
        <>
          <Top>
            <Title>
              <Images>
                <Flag
                  src={league.countryLogo}
                  alt={league.countryName}
                />
                <Logo
                  src={league.leagueLogo}
                  alt={league.leagueName}
                />
              </Images>
              <Name>{league.leagueName}</Name>
            </Title>
            <View
              hover={hover}
              onMouseEnter={hoverElement}
              onMouseLeave={noHoverElement}>
              <span>View All</span>
              <Icon
                hover={hover}
                size={20}></Icon>
            </View>
          </Top>
          <Middle>
            <Club>Club</Club>
            <State>
              <div>W</div>
              <div>D</div>
              <div>L</div>
              <div>Poin</div>
            </State>
            <div>Last Match</div>
          </Middle>
          <TableBlock>
            <List
              items={standings}
              renderItem={(e) => (
                <TableItem
                  item={e}
                  key={e.teamName}></TableItem>
              )}></List>
          </TableBlock>
          <Bottom>
            <Info>
              <Circle color="#4920EB" />
              <Text>Champions League</Text>
            </Info>
            <Info>
              <Circle color="#412E2E" />
              <Text>Europa League</Text>
            </Info>
            <Info>
              <Circle color="#b83100" />
              <Text>Europa Conference</Text>
            </Info>
          </Bottom>
        </>
      )}
    </Container>
  );
};

export default Table;
