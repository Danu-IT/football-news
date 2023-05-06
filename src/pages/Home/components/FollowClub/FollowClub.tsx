import { FC } from "react";
import { useStandings } from "../../../../store/standings";
import { Container } from "./style";
import { CustomSlider } from "../../../../components";
import ItemFollowClub from "./components/ItemFollowClub/ItemFollowClub";
import { SwiperSlide } from "swiper/react";

const FollowClub: FC = ({}) => {
  const standings = useStandings((state) => state.standings);

  return (
    <Container>
      <CustomSlider count="7">
        {standings.map((el, i) => (
          <SwiperSlide key={el.points}>
            <ItemFollowClub elem={el}></ItemFollowClub>
          </SwiperSlide>
        ))}
      </CustomSlider>
    </Container>
  );
};

export default FollowClub;
