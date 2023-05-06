import { ComponentType } from "react";
import Home from "../pages/Home/Home";
import MatchPage from "../pages/MatchPage/MatchPage";

export interface IRoute {
  path: string;
  component: ComponentType;
  type: string;
}

export enum RoutesNamesPrivate {
  HOME = "/",
  MATCH = "/match/:id",
}

export const privateRoutes: IRoute[] = [
  { path: RoutesNamesPrivate.HOME, component: Home, type: "Home" },
  { path: RoutesNamesPrivate.MATCH, component: MatchPage, type: "Match" },
];
