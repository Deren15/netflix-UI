/* eslint-disable import/no-anonymous-default-export */

const API_KEY = '0b97f7d704bd514ea88b7c45cfbc5de9';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Netflix Originals',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recommended for you',
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
            },
            {
                slug: 'top rated',
                title: 'On the rise',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items:  await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            }, 
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            }, 
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentries',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (MovieId, type) => {
        let info = {};
        if(MovieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${MovieId}?api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${MovieId}?api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }
        return info;
    }
}

