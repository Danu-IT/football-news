import { FC } from "react";
import { CustomSlider, List } from "../../../../components";
import { shoping } from "../../../../view/shoping";
import { SwiperSlide } from "swiper/react";
import { Container, ContainerImg, Img, Price, Title } from "./style";

interface ShopingProps {}

const Shoping: FC<ShopingProps> = ({}) => {
  return (
    <Container>
      <CustomSlider
        inf={true}
        count="5">
        {shoping.concat(shoping).map((el, i) => (
          <SwiperSlide key={i}>
            <ContainerImg>
              <Img src={el.icon}></Img>
            </ContainerImg>
            <Title>{el.title}</Title>
            <Price>{el.price}</Price>
          </SwiperSlide>
        ))}
      </CustomSlider>
    </Container>
  );
};

export default Shoping;
