import { menu } from "../../../../view/menu";
import { List } from "../../..";
import Item from "../Item/Item";
import { Container, Content, Title } from "./style";

const Menu = ({}) => {
  return (
    <Container>
      <Title>Menu</Title>
      <Content>
        <List
          items={menu}
          renderItem={(el) => (
            <Item
              key={el.id}
              Icon={el.element}
              text={el.text}></Item>
          )}></List>
      </Content>
    </Container>
  );
};

export default Menu;
