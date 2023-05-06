import { FC, Dispatch, SetStateAction } from "react";
import { Container, Info, Line, Menu, MenuBlock } from "./style";
import { FaHeadphones } from "react-icons/fa";
import { sports } from "../../view/sports";
import { interactions } from "../../view/interactions";
import { List } from "../";

interface SidebarProps {
  setVisibleDashboard: Dispatch<SetStateAction<boolean>>;
  visibleDashboard: boolean;
}

const Sidebar: FC<SidebarProps> = ({
  setVisibleDashboard,
  visibleDashboard,
}) => {
  const handlerMenu = () => setVisibleDashboard((prev) => !prev);
  return (
    <Container>
      <MenuBlock onClick={handlerMenu}>
        <Menu
          color={visibleDashboard ? "#F5C451" : "#A4A4A4"}
          size={20}></Menu>
      </MenuBlock>
      <List
        items={interactions}
        renderItem={(el) => (
          <el.element
            key={el.id}
            size={20}></el.element>
        )}></List>
      <Line></Line>
      <List
        items={sports}
        renderItem={(el) => (
          <el.element
            key={el.id}
            color={el.id === "football" ? "#F5C451" : ""}
            size={20}></el.element>
        )}></List>
      <Info size={20}></Info>
      <FaHeadphones size={20}></FaHeadphones>
    </Container>
  );
};

export default Sidebar;
