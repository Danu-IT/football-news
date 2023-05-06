export interface CountryApiI{
    country_id: string;
    country_logo: string;
    country_name: string;
}

export interface CountryI{
    countryId: string;
    countryLogo: string;
    countryName: string;
}

export interface CountryState {
    countries: CountryI[];
    loading: boolean;
    error: string;
    fetchCountries: () => void;
}