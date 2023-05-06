import { EventsApiI, EventsI, EventsState } from '../interfaces/events';
import PostService from "../api/PostService";
import { create } from 'zustand';

export const useEvents = create<EventsState>((set, get) => ({
    matches: [],
    match: null,
    Eventloading: false,
    Eventsloading: false,
    EventError: 'false',
    EventsError: '',
    fetchEvents: async (leagueId: string, from: string, to: string) => {
        set({Eventsloading: true})
        try {
            const response = await PostService.getAll('events', `league_id=${leagueId}&from=${from}&to=${to}`);
            const data: EventsI[] = [];
            response.data.forEach((el: EventsApiI) => {
                data.push({
                    matchId: el.match_id,
                    teamHomeBadge: el.team_home_badge,
                    teamAwayBadge: el.team_away_badge,
                    matchAwayteamName: el.match_awayteam_name,
                    matchAwayteamScore: el.match_awayteam_score,
                    matchAwayteamSystem: el.match_awayteam_system,
                    matchDate: el.match_date,
                    matchHometeamName: el.match_hometeam_name,
                    matchHometeamScore: el.match_hometeam_score,
                    matchHometeamSystem: el.match_hometeam_system,
                    matchStadium: el.match_stadium,
                    statistics: el.statistics,
                    goalscorer: el.goalscorer
                })
            })
            set({matches: data})
        } 
        catch(err: any){
            set({EventsError: err.message})
        } finally {
            set({Eventsloading: false})
        }
    },
    fetchEvent: async (matchId: string) => {
        set({Eventloading: true})
        try {
            const response = await PostService.getAll('events', `match_id=${matchId}`);
            let data: EventsI | null = null;
            response.data.forEach((el: EventsApiI) => {
                data = {
                    matchId: el.match_id,
                    teamHomeBadge: el.team_home_badge,
                    teamAwayBadge: el.team_away_badge,
                    matchAwayteamName: el.match_awayteam_name,
                    matchAwayteamScore: el.match_awayteam_score,
                    matchAwayteamSystem: el.match_awayteam_system,
                    matchDate: el.match_date,
                    matchHometeamName: el.match_hometeam_name,
                    matchHometeamScore: el.match_hometeam_score,
                    matchHometeamSystem: el.match_hometeam_system,
                    matchStadium: el.match_stadium,
                    statistics: el.statistics,
                    goalscorer: el.goalscorer,
                    lineup: el.lineup
                }
            }) 
            set({match: data})
        } 
        catch(err: any){
            set({EventError: err.message})
        } finally {
            set({Eventloading: false})
        }
    }
}))