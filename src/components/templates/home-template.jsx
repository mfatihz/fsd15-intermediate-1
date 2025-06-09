// import Gallery from "../organisms/gallery"
// import Header from "../organisms/home-header"
// import Hero from "../organisms/hero"
// import Footer from "./home-footer"

// function HomeTemplate({ header, footer, hero, galleries }) {
//     return (
//         <>
//             <header 
//                 id="top"
//                 className="
//                     bg-[#0f0f1a]
//                     px-4 sm:px-10 md:px-20
//                     py-2 sm:py-4 md:py-6
//                 "
//             >
//                 <Header
//                     navData={header.navData}
//                     menuData={header.menuData}
//                 />
//             </header>

//             <Hero
//                 movie={hero}
//                 className='
//                     px-4 sm:px-10 md:px-20
//                     pb-4 sm:pb-10 md:pb-20
//                 '
//             />
            
//             <main
//                 className="
//                     w-full
//                     px-4 sm:px-10 md:px-20
//                     py-4 sm:py-10 md:py-20
//                     bg-[#0f0f1a]
//                 "
//             >
//                 <div className="flex flex-col gap-6 w-full">
//                     {
//                         galleries?.map((gallery, index) => (
//                             <div key={index} className="w-full">
//                                 <Gallery
//                                     title={gallery.title}
//                                     movies={gallery.movies}
//                                     type={gallery.type}
//                                 />
//                             </div>
//                         ))
//                     }
//                 </div>
//             </main>
            
//             <Footer
//                 genreData={footer.genreData}
//                 helpData={footer.helpData}
//             />
//         </>
//     )
// }

// export default HomeTemplate
import Gallery from "../organisms/gallery"
import Header from "../organisms/home-header"
import Hero from "../organisms/hero"
import Footer from "./home-footer"

function HomeTemplate({ header, footer, hero, galleries }) {
    return (
        <>
            <header 
                id="top"
                className="
                    bg-[#0f0f1a]
                    px-4 sm:px-10 md:px-20
                    py-2 sm:py-4 md:py-6
                "
            >
                <Header
                    navData={header.navData}
                    menuData={header.menuData}
                />
            </header>

            <Hero
                movie={hero}
                className='
                    px-4 sm:px-10 md:px-20
                    pb-4 sm:pb-10 md:pb-20
                '
            />
            
            <main
                className="
                    w-full
                    px-4 sm:px-10 md:px-20
                    py-4 sm:py-10 md:py-20
                    bg-[#181A1C]
                    overflow-x-hidden
                    flex flex-col w-full
                "
            >
                {
                    galleries?.map((gallery, index) => (
                        <div key={index} className="w-full overflow-visible">
                            <Gallery
                                title={gallery.title}
                                movies={gallery.movies}
                                galleryType={gallery.type}
                            />
                        </div>
                    ))
                }
            </main>
            
            <Footer
                genreData={footer.genreData}
                helpData={footer.helpData}
            />
        </>
    )
}

export default HomeTemplate