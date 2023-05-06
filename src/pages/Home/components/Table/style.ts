import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div``

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export interface IconProps {
  hover: boolean;
}

export const Icon = styled(MdKeyboardArrowRight)<IconProps>`
  position: absolute;
  right: ${({ hover }) => (hover ? "-45px" : "-25px")};
  transition: right 0.4s;
`;

export const View = styled.div<IconProps>`
  color: ${({ hover }) => (hover ? "#F5C451" : "#a4a4a4")};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 40px;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Flag = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const TableBlock = styled.div`
  height: 367px;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Images = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Logo = styled.img`
  width: 32px;
  height: 32px;
`;
export const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 10px 20px 10px;
`;

export const Club = styled.div`
  width: 264px;
`;
export const State = styled.div`
  display: flex;
  align-items: center;
  & > * {
    width: 60px;
    text-align: left;
  }
`;

export const Bottom = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 40px;
  align-items: center;
`;

export interface CircleProps {
  color: string;
}

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled.div<CircleProps>`
  background: ${({ color }) => color};
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;
export const Text = styled.div``;