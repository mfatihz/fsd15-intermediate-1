import GalleryTitle from "../atoms/gallery-title"
import PosterSlider from "./poster-slider"

const Gallery = ({title, movies, type}) => {
  return (
    <div className="flex flex-col gap-1 md:gap-4">
      <GalleryTitle>{title}</GalleryTitle>
      <PosterSlider movies={movies} type={type} />
    </div>
  )
}

export default Gallery