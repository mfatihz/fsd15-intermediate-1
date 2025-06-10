export const heroDB = {
    id: Math.random()*100,
    title: "Duty after School",
    type: ['movie','series'][0],
    badges: ['new','top'],
    genres: ['action','drama','fantasy'],
    contentRating: "18+",
    userRating: 4.7,
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

const seederMovie = ()=>{
    return {
        id: Math.random()*100,
        title:'Suzume',
        type:['movie','series'][0],
        genres:['action','drama','fantasy'],
        badges:['new','top'],
        contentRating:['18+','G','PG','R'][2],
        userRating:4.7,
        duration:'1.45',
        episodes: null,
        myList: false,
        images:{
            hero:'',
            portrait:'/images/poster-portrait/suzume.svg',
            landscape:'/images/poster-landscape/suzume.svg',
        },
        summary:'Ringkasan belum tersedia',
    }
}

const seederMovie2 = ()=>{
    const seed = seederMovie();
    seed.title = "Big Hero 6";
    seed.contentRating = ['18+','G','PG','R'][1];
    seed.genres = ['action','anime','fantasy'];
    seed.badges = [];
    seed.userRating = 4.6;
    seed.duration = '1.23';
    seed.images = {
        hero:'',
        portrait:'/images/poster-portrait/big-hero-6.svg',
        landscape:'/images/poster-landscape/big-hero-6.svg',
    };
    return seed;
}

const seederMovie3 = ()=>{
    const seed = seederMovie();
    seed.title = "The Tomorrow War";
    seed.contentRating = ['18+','G','PG','R'][2];
    seed.genres = ['action','fantasy','sci-fi'];
    seed.badges = [];
    seed.userRating = 4.6;
    seed.duration = '1.31';
    seed.images = {
        hero:'',
        portrait:'/images/poster-portrait/tom-war.svg',
        landscape:'/images/poster-landscape/tom-war.svg',
    };
    return seed;
}

const seederSeries = ()=>{
    return {
        id: Math.random()*100,
        title:'All of Us Are Dead',
        type:['movie','series'][1],
        genres:['series','action','Sci-fi','drama','romance'],
        badges:['new','top'],
        contentRating:['18+','G','PG','R'][1],
        userRating:4.5,
        duration:null,
        episodes:'17',
        myList:false,
        images:{
            hero:'all-us-dead.svg',
            portrait:'/images/poster-portrait/all-us-dead.svg',
            landscape:'/images/poster-landscape/all-us-dead.svg',
        },
        summary:'Ringkasan belum tersedia',
    }
}

const seederSeries2 = ()=>{
    const seed = seederSeries();
    seed.title = "A Man Called Otto";
    seed.contentRating = ['18+','G','PG','R'][3];
    seed.genres = ['action', 'Sci-fi', 'Thriller', 'Romance'];
    seed.badges = ['top'];
    seed.userRating = 4.7;
    seed.episodes = '21';
    seed.images = {
        hero:'',
        portrait:'/images/poster-portrait/otto.svg',
        landscape:'/images/poster-landscape/otto.svg',
    };
    return seed;
}

const seederSeries3 = ()=>{
    const seed = seederSeries();
    seed.title = "The Little Mermaid";
    seed.badges = ['new'];
    seed.userRating = 4.3;
    seed.episodes = '15';
    seed.images = {
        hero:'',
        portrait:'/images/poster-portrait/mermaid.svg',
        landscape:'/images/poster-landscape/mermaid.svg',
    };
    return seed;
}

export const continueDB = [
    seederMovie(),seederSeries(),seederMovie2(),seederSeries2(),seederMovie3(),seederSeries3(),
    seederMovie(),seederSeries3(),seederSeries(),seederMovie3(),seederMovie2(),seederSeries2(),
]

export const topDB = [
    seederSeries(),seederMovie2(),seederSeries3(),seederMovie(),seederMovie3()
]

export const trendingDB = [
    seederMovie(),seederMovie2(),seederSeries(),seederMovie3(),seederSeries3(),seederSeries2(),
    seederMovie2(),seederMovie(),seederSeries2(),seederMovie3(),seederSeries(),seederSeries3(),
]

export const newDB = [
    seederMovie2(),seederSeries2(),seederMovie3(),seederSeries(),seederMovie(),seederSeries3(),
    seederMovie2(),seederMovie3(),seederMovie(),seederSeries2(),seederSeries3(),seederSeries(),
]
