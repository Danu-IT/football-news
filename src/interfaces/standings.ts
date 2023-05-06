export interface StandingsApiI{
    team_name: string;
    team_badge: string;
    overall_league_position: string;
    overall_league_W: string;
    overall_league_D: string;
    overall_league_L: string;
    overall_league_PTS: string;
    overall_promotion?: string;
}

export interface StandingsI{
    teamName: string;
    teamBadge: string;
    LeaguePosition: string;
    LeagueWin: string;
    LeagueDraw: string;
    LeagueLose: string;
    points: string;
    EuropeanСups?: string;
}

export interface StandingsState {
    standings: StandingsI[];
    loading: boolean;
    error: string;
    favorite: StandingsI[],
    fetchStandings: (id: string) => void;
    addClub: (name: string) => void;
    removeClub: (name: string) => void;
}