import clsx from 'clsx'
import Gallery from '../organisms/gallery'

const GalleriesTemplate = ({ galleries, padding }) => {
    const baseStyle = `flex-1
        flex flex-col
        overflow-x-hidden
        w-full bg-[#181A1C]
    `

    return (
        <main
            className={clsx(baseStyle, padding)}
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
    )
}

export default GalleriesTemplate