import { StandingsI } from "../../../../../../interfaces/standings";
import { FC } from "react";
import { useStandings } from "../../../../../../store/standings";
import { SwiperSlide } from "swiper/react";
import { ContainerIcon, Icon } from "./style";

interface FollowClubProps {
  elem: StandingsI;
}

const ItemFollowClub: FC<FollowClubProps> = ({ elem }) => {
  let isFollow = false;
  const { addClub, favorite, removeClub } = useStandings((state) => ({
    favorite: state.favorite,
    addClub: state.addClub,
    removeClub: state.removeClub,
  }));

  const handlerFollow = (item: StandingsI) => {
    let isFollow = false;
    favorite.forEach((el) => {
      if (el.teamName === item.teamName) {
        isFollow = true;
      }
    });
    isFollow ? removeClub(item.teamName) : addClub(item.teamName);
  };
  favorite.forEach((item) => {
    if (elem.teamName === item.teamName) {
      isFollow = true;
    }
  });
  return (
    <ContainerIcon
      isFollow={isFollow}
      onClick={() => handlerFollow(elem)}>
      <Icon
        src={elem.teamBadge}
        alt={elem.teamName}
      />
    </ContainerIcon>
  );
};

export default ItemFollowClub;
