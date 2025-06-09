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
    isViewed: false,
    summary: `Sebuah benda tak dikenal mengambil alih dunia.
        Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara,
        termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.`,
}

const seederMovie = (id)=>{
    return {
        id: id,
        title:'Suzume',
        type:['movie','series'][0],
        contentRating:['18+','G','PG','R'][1],
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
        isViewed: false,
        summary:'Ringkasan belum tersedia',
    }
}

export const continueDB = [seederMovie(0),seederMovie(1),seederMovie(2),seederMovie(3),seederMovie(4),seederMovie(5),seederMovie(6)]
export const topDB = [seederMovie(0),seederMovie(1)]
export const trendingDB = [seederMovie(0),seederMovie(1),seederMovie(2),seederMovie(3),seederMovie(4),seederMovie(5),seederMovie(6)]
export const newDB = [seederMovie(0),seederMovie(1),seederMovie(2),seederMovie(3),seederMovie(4),seederMovie(5),seederMovie(6)]
