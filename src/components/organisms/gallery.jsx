import clsx from 'clsx'
import GalleryTitle from "../atoms/gallery-title"
import PosterSlider from "./poster-slider"

const Gallery = ({title, movies, galleryType, className=""}) => {
  return (
    <div className="relative w-full">
      <GalleryTitle className={clsx("absolute -top-2 left-0", className)}>{title}</GalleryTitle>
      <PosterSlider movies={movies} galleryType={galleryType} className={className}/>
    </div>
  )
}

export default Gallery