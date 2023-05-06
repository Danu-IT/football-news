import { useState, useEffect } from "react";
import { Sidebar, Header, Dashboard } from "../components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoutes } from "../routes";
import { useСountries } from "../store/country";
import { Container } from "./style";
import { useLegues } from "../store/league";

const App = () => {
  const [visibleDashboard, setVisibleDashboard] = useState(false);

  const { fetchCountries, countries } = useСountries((state) => ({
    countries: state.countries,
    fetchCountries: state.fetchCountries,
  })); // Страны

  const fetchLeagues = useLegues((state) => state.fetchLeagues);

  useEffect(() => {
    countries.forEach(async (el, i) => {
      fetchLeagues(el.countryId);
    });
  }, [countries]);

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Container>
      <Sidebar
        visibleDashboard={visibleDashboard}
        setVisibleDashboard={setVisibleDashboard}></Sidebar>
      <Dashboard visible={visibleDashboard}></Dashboard>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component></route.component>}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
