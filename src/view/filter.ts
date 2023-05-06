export interface FiltProps {
    name: string;
    event: string;
    active: boolean;
}

export const filt = [{
    name: 'Latest Match', 
    event: 'past',
    active: true,
},{
    name: 'Coming Match', 
    event: 'future',
    active: false,
},{
    name: 'Live Games', 
    event: 'now',
    active: false,
}]