import { FiltProps } from "../view/filter";

export interface FilterState{
    filter: FiltProps[];
    changeFilter: (event: string) => void;
}