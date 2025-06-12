import CoverImage from '../atoms/cover-image'
import PlayButton from '../atoms/play-button'
import CheckButton from '../atoms/check-button'
import ChevronDownButton from '../atoms/chevron-down-button'
import PosterContentRating from '../atoms/poster-content-rating'
import PosterLabel from '../atoms/poster-label'

function PosterHover({movie}) {
  return (
    <div className='  
      w-[204px] md:w-[306px] md:w-[408px]
      h-[230px] sm:h-[345px] md:h-[460px]
      rounded-lg sm:rounded-xl md:rounded-2xl
      flex flex-col bg-[#0f0f1a] 
      overflow-hidden shadow-xl
    '>
      <CoverImage src={movie.images.landscape} className="w-full h-[254px] object-cover" />
      <div className='p-8 flex flex-col gap-5 text-white'>
        <div className='flex gap-4'>
          <PlayButton />
          <CheckButton />
          <ChevronDownButton className="ml-auto"/>
        </div>
        <div className='flex gap-4 text-sm content-center items-center'>
          <PosterContentRating>{ movie.contentRating }</PosterContentRating>
          { movie.type == "series" ?
            (movie.episodes && <PosterLabel>{ movie.episodes + " episode" }</PosterLabel>) :
            (movie.duration && <PosterLabel>{ movie.duration + " jam" }</PosterLabel>)
          }
        </div>
        {movie.genres && <PosterLabel>{ movie.genres.join(" · ") }</PosterLabel>}
      </div>
    </div>
  )
}

export default PosterHover