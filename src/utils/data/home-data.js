import { heroDB, continueDB, topDB, trendingDB, newDB } from "./db"

export const movieHero = heroDB

export const movieGalleries = [
    {
        title: "Melanjutkan Tonton Film",
        movies: continueDB,
        type: "continue"
    },
    {
        title: "Top Rating Film dan Series Hari ini",
        movies: topDB
    },
    {
        title: "Film Trending",
        movies: trendingDB
    },
    {
        title: "Rilis Baru",
        movies: newDB
    },
    {
        title: "New Category",
        movies: []
    },
]