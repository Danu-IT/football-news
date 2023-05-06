import create from 'zustand'
import { CountryApiI, CountryI, CountryState } from '../interfaces/country'
import PostService from '../api/PostService';

export const useСountries = create<CountryState>(set => ({
    countries: [],
    loading: false,
    error: '',
    fetchCountries: async () => {
        set({loading: true})
        const response = await PostService.getAll('countries');
        
        const dataApi: CountryApiI[] = [];
        const data: CountryI[] = [];
        try {
            response.data.forEach((el: CountryApiI) => {
                if (
                el.country_name === "Spain" ||
                el.country_name === "France" ||
                el.country_name === "Italy" ||
                el.country_name === "Germany" ||
                el.country_name === "Netherlands" ||
                el.country_name === "Belgium" || 
                el.country_name === "Portugal" 
                ){
                    dataApi.push(el);
                }
            });
    
            dataApi.forEach((el: CountryApiI) =>
                data.push({
                countryId: el.country_id,
                countryLogo: el.country_logo,
                countryName: el.country_name,
                })
            );
            set({countries: data})
        } catch(err: any){
            set({error: err.message})
        } finally {
            set({loading: false})
        }
    },
}))