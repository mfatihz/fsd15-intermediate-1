export const heroDB = {
    id: 0,
    title: "Duty after School",
    type: ['movie','series'][0],
    genres: ['action','drama','fantasy'],
    contentRating: "18+",
    userRating: 4.7,
    badges: ['new','top'],
    images: {
        // note: Ketika Anda menggunakan URL langsung di CSS (termasuk inline style),
        // Vite secara otomatis memproses path tersebut selama path-nya relatif terhadap file yang sedang diproses
        // gambar diletakkan di folder src/assets/images/hero
        hero:'duty-after-school.svg',
        // note: gambar ditampilkan sebagai atribut pada <img>
        // perlu metode khusus (seperti import atau new URL) untuk mendapatkan URL yang benar
        // agar scrip lebih ringkas, gambar sementara ini diletakkan di public 
        portrait:'/images/poster-portrait/suzume.svg',
        landscape:'/images/poster-landscape/suzume.svg',
    },
    duration:'1.45',
    episodes: null,
    myList: false,
    summary: `Sebuah benda tak dikenal mengambil alih dunia.
        Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara,
        termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.`,
}

const seederMovie = (id)=>{
    return {
        id: id,
        title:'Suzume',
        type:['movie','series'][0],
        contentRating:['18+','G','PG','R'][2],
        genres:['action','drama','fantasy'],
        userRating:4.7,
        badges:['new','top'],
        images:{
            hero:'',
            portrait:'/images/poster-portrait/suzume.svg',
            landscape:'/images/poster-landscape/suzume.svg',
        },
        duration:'1.45',
        episodes: null,
        myList: false,
        summary:'Ringkasan belum tersedia',
    }
}

const seederMovie2 = (id)=>{
    return {
        id: id,
        title:'Big Hero 6',
        type:['movie','series'][0],
        contentRating:['18+','G','PG','R'][1],
        genres:['action','anime','fantasy'],
        userRating:4.6,
        badges:[],
        images:{
            hero:'',
            portrait:'/images/poster-portrait/big-hero-6.svg',
            landscape:'/images/poster-landscape/big-hero-6.svg',
        },
        duration:'1.23',
        episodes: null,
        myList: false,
        summary:'Ringkasan belum tersedia',
    }
}

const seederSeries = (id)=>{
    return {
        id: id,
        title:'All of Us Dead',
        type:['movie','series'][1],
        contentRating:['18+','G','PG','R'][0],
        genres:['action', 'Sci-fi'],
        userRating:4.5,
        badges:['new'],
        images:{
            hero:'all-us-dead.svg',
            portrait:'/images/poster-portrait/all-us-dead.svg',
            landscape:'/images/poster-landscape/all-us-dead.svg',
        },
        duration:null,
        episodes:'17',
        myList:false,
        summary:'Ringkasan belum tersedia',
    }
}

const seederSeries2 = (id)=>{
    return {
        id: id,
        title:'Otto',
        type:['movie','series'][1],
        contentRating:['18+','G','PG','R'][3],
        genres:['action', 'Sci-fi', 'Thriller', 'Romance'],
        userRating:4.5,
        badges:['top'],
        images:{
            hero:'',
            portrait:'/images/poster-portrait/otto.svg',
            landscape:'/images/poster-landscape/otto.svg',
        },
        duration:null,
        episodes:'12',
        myList:false,
        summary:'Ringkasan belum tersedia',
    }
}

export const continueDB = [
    seederMovie(0),seederSeries(1),seederMovie2(2),seederSeries2(3),
    seederMovie(4),seederMovie2(5),seederSeries(6)
]

export const topDB = [
    seederSeries(0),seederMovie(1)
]

export const trendingDB = [
    seederMovie(0),seederMovie2(1),seederSeries(2),seederSeries2(3),
    seederMovie2(4),seederMovie(5),seederSeries2(6)
]

export const newDB = [
    seederMovie2(0),seederSeries2(1),seederSeries(2),seederMovie(3),
    seederMovie2(4),seederMovie(5),seederSeries2(6)
]
