import { Container, ContainerLogo, LogoText } from "./style";
import { FC, useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { Menu } from "./";
import { DropDownList, League } from "../";
import { useLegues } from "../../store/league";
import FavoriteClub from "../Item/FavoriteClub/FavoriteClub";
import { useStandings } from "../../store/standings";

interface DashboardProps {
  visible: boolean;
}

const Dashboard: FC<DashboardProps> = ({ visible }) => {
  const [isVisibleList, setIsVisibleList] = useState(true);
  const [isVisibleFavoriteClubs, setisVisibleFavoriteClubs] = useState(false);

  useEffect(() => {
    if (isVisibleFavoriteClubs === true) {
      setIsVisibleList(false);
    }
  }, [isVisibleFavoriteClubs]);

  useEffect(() => {
    if (isVisibleList === true) {
      setisVisibleFavoriteClubs(false);
    }
  }, [isVisibleList]);

  const favorite = useStandings((state) => state.favorite);

  const { loadingLeagues, leagues } = useLegues((state) => ({
    leagues: state.leagues,
    loadingLeagues: state.loading,
  }));

  return (
    <Container visible={visible}>
      <ContainerLogo>
        <FaPlay
          color="#8000ff"
          size={15}></FaPlay>
        <LogoText>Onesport</LogoText>
      </ContainerLogo>
      <Menu></Menu>
      <DropDownList
        isVisibleList={isVisibleList}
        setIsVisibleList={setIsVisibleList}
        loading={loadingLeagues}
        list={leagues}
        ItemComponent={League}>
        Football League
      </DropDownList>
      <DropDownList
        isVisibleList={isVisibleFavoriteClubs}
        setIsVisibleList={setisVisibleFavoriteClubs}
        list={favorite}
        ItemComponent={FavoriteClub}>
        Favorite club
      </DropDownList>
    </Container>
  );
};

export default Dashboard;
