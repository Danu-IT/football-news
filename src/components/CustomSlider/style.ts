import styled from "styled-components";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

export const NextBlock = styled.div`
  position: absolute;
  top: -50px;
  right: 140px;
  cursor: pointer;
`;
export const PrevBlock = styled.div`
  position: absolute;
  top: -50px;
  right: 100px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const Next = styled(GrFormPreviousLink)`
  color: white;
`;
export const Prev = styled(GrFormNextLink)``;