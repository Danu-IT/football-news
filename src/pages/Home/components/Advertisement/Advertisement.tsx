import { Container, Images, Left, Right, SubTitle, Text, Title } from "./style";
import appStore from "../../../../assets/advertisement/AppStore.png";
import google from "../../../../assets/advertisement/Google.png";
import screen from "../../../../assets/advertisement/Screen.png";

const Advertisement = ({}) => {
  return (
    <Container>
      <Left>
        <SubTitle>New Platform</SubTitle>
        <Title>Get one of our sports apps, which is only available on</Title>
        <Text>Download Apps :</Text>
        <Images>
          <img
            src={appStore}
            alt=""
          />
          <img
            src={google}
            alt=""
          />
        </Images>
      </Left>
      <Right
        src={screen}
        alt=""></Right>
    </Container>
  );
};

export default Advertisement;
