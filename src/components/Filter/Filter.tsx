import { FC } from "react";
import List from "../List/List";
import { Container, Item, Line, LineActive, Text } from "./style";
import { useFilter } from "../../store/filter";
import { FiltProps } from "../../view/filter";

interface FilterProps {
  filter: FiltProps[];
  changeFilter: (value: string) => void;
}

const Filter: FC<FilterProps> = ({ filter, changeFilter }) => {
  return (
    <Container>
      <List
        items={filter}
        renderItem={(el) => (
          <Item isActive={el.active}>
            <Text onClick={() => changeFilter(el.event)}>{el.name}</Text>
            <LineActive isActive={el.active}></LineActive>
          </Item>
        )}></List>
      <Line></Line>
    </Container>
  );
};

export default Filter;
