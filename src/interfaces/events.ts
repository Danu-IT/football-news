export interface EventsApiI{
    match_id: string;
    match_date: string;
    match_hometeam_name: string;
    match_hometeam_score: string;
    match_awayteam_name: string;
    match_awayteam_score: string;
    match_hometeam_system: string;
    match_awayteam_system: string;
    team_home_badge: string;
    team_away_badge: string;
    match_stadium: string
    statistics: StatisticI[];
    goalscorer: GoalscorerApiI[];
    lineup?: EventLineUp;
}

export interface StatisticLineUp {
    lineup_number: string;
    lineup_player: string;
    lineup_position: string;
}

export interface StatisticI {
    type: string;
    home: string;
    away: string;
}

export interface GoalscorerApiI {
    time: string;
    home_scorer: string;
    away_scorer: string;
}

export interface EventsI{
    matchId: string;
    matchDate: string;
    matchHometeamName: string;
    matchHometeamScore: string;
    matchAwayteamName: string;
    matchAwayteamScore: string;
    matchHometeamSystem: string;
    matchAwayteamSystem: string;
    teamHomeBadge: string;
    teamAwayBadge: string;
    matchStadium: string;
    statistics: StatisticI[];
    goalscorer: GoalscorerApiI[]
    lineup?: EventLineUp
}

export interface EventLineUp {
    home: {
        starting_lineups: StatisticLineUp[];
    };
    away: {
        starting_lineups: StatisticLineUp[];
    };
}

export interface EventsState {
    matches: EventsI[];
    match: EventsI | null;
    Eventloading: boolean;
    Eventsloading: boolean;
    EventError: string;
    EventsError: string;
    fetchEvents: (id: string, from: string, to: string) => void;
    fetchEvent: (matchId : string) => void;
}