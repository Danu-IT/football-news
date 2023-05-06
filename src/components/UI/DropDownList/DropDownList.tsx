import React, { Dispatch, FC, SetStateAction } from "react";
import { Arrow, Container, Header, Title } from "./style";
import { List } from "../../";
import { LeagueI } from "../../../interfaces/league";

interface DropDownListProps {
  isVisibleList: boolean;
  setIsVisibleList: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  ItemComponent: any;
  loading?: boolean;
  list: any[];
}

const DropDownList: FC<DropDownListProps> = ({
  children,
  list,
  loading,
  ItemComponent,
  isVisibleList,
  setIsVisibleList,
}) => {
  const visibleList = () => setIsVisibleList((prev) => !prev);
  return (
    <Container>
      <Header onClick={visibleList}>
        <Title>{String(children).toUpperCase()}</Title>
        <Arrow isVisibleList={isVisibleList}></Arrow>
      </Header>
      {isVisibleList && (
        <List
          items={list}
          renderItem={(el: LeagueI) => (
            <ItemComponent
              key={el.leagueId}
              item={el}></ItemComponent>
          )}></List>
      )}
    </Container>
  );
};

export default DropDownList;
