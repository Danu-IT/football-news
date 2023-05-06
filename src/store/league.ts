import { create } from "zustand";
import { LeagueApiI, LeagueI, LeagueState } from "../interfaces/league";
import PostService from "../api/PostService";


export const useLegues = create<LeagueState>((set, get) => ({
    leagues: [],
    loading: false,
    choiceLeagueId: '',
    error: '',
    fetchLeagues: async (countryId: string) => {
        set({loading: true})
        try {
            const response = await PostService.getAll('leagues', `country_id=${countryId}`);
            const dataApi: LeagueApiI[] = [];
            let data: LeagueI | null = null;
            response.data.forEach(async (el: LeagueApiI) => {
                if( el.league_name === 'Premier League' || 
                    el.league_name === 'Ligue 1' || 
                    el.league_name === 'Serie A' || 
                    el.league_name === 'LaLiga' ||
                    el.league_name === 'Eredivisie' ||
                    el.league_name === 'Bundesliga' ||
                    el.league_name === 'Belgian Pro League' || 
                    el.league_name === 'Primeira Liga'  ){
                        dataApi.push(el)
                    }
            })

            dataApi.forEach(async (el: LeagueApiI) =>
                data = {
                    countryId: el.country_id,
                    countryLogo: el.country_logo,
                    countryName: el.country_name,
                    leagueId: el.league_id,
                    leagueLogo: el.league_logo,
                    leagueName: el.league_name,
                    leagueSeason: el.league_season,
                }
            );
            data && set({leagues: [...get().leagues, data]})
        } catch(err: any){
            set({error: err.message})
        } finally {
            set({loading: false})
        }
    },
    changeChoiceLeagueId: (leagueId: string) => {
        set({choiceLeagueId: leagueId})
    }
})) 