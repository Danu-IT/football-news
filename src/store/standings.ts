import { create } from "zustand";
import { StandingsApiI, StandingsI, StandingsState } from "../interfaces/standings";
import PostService from "../api/PostService";

export const useStandings = create<StandingsState>((set, get) => ({
    standings: [],
    loading: false,
    error: '',
    favorite: [],
    fetchStandings: async (leagueId: string) => {
        set({standings: []})
        set({loading: true})
        try {
            const response = await PostService.getAll('standings',`league_id=${leagueId}`);
            const data: StandingsI[] = [];
            response.data.forEach(async (el: StandingsApiI) => {
                data.push({
                    LeagueDraw: el.overall_league_D,
                    LeagueLose: el.overall_league_L,
                    LeaguePosition: el.overall_league_position,
                    LeagueWin: el.overall_league_W,
                    points: el.overall_league_PTS,
                    teamBadge: el.team_badge,
                    teamName: el.team_name,
                    EuropeanСups: el.overall_promotion,
                })
            })
            set({standings: data})
        }
        catch(e: any) {
            set({error: e.message})
        }
        finally {
            set({loading: false})
        }
    },
    addClub: (name: string) => {
        get().standings.forEach(el => {
            if(el.teamName === name){
                set({favorite: [...get().favorite, el]})
            }
        })
    },
    removeClub: (name: string) => {
        const state = get().favorite.filter(el => {
            if(el.teamName === name){
                return false
            }
            return true
        })
        set({favorite: state})
    },
}))