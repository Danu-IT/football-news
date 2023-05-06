export interface LeagueApiI{
    country_id: string;
    country_logo: string;
    country_name: string;
    league_id: string;
    league_logo: string;
    league_name: string;
    league_season: string;
}

export interface LeagueI{
    countryId: string;
    countryLogo: string;
    countryName: string;
    leagueId: string;
    leagueLogo: string;
    leagueName: string;
    leagueSeason: string;
}

export interface LeagueState {
    leagues: LeagueI[];
    loading: boolean;
    error: string;
    choiceLeagueId: string;
    fetchLeagues: (id: string) => void;
    changeChoiceLeagueId: (id: string) => void;
}