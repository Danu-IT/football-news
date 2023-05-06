import { FC } from "react";
import { EventsI } from "../../../../interfaces/events";
import styled from "styled-components";
import Teams from "./components/Teams/Teams";
import { Container, Title } from "./style";

interface LocationProps {
  system: string;
  match: EventsI;
}

const Location: FC<LocationProps> = ({ match, system }) => {
  return (
    <Container>
      <Title>Team Formation</Title>
      <Teams
        system={system}
        match={match}></Teams>
    </Container>
  );
};

export default Location;
