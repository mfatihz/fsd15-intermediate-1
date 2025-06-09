import CoverImage from '../atoms/cover-image'
import PlayButton from '../atoms/play-button'
import CheckButton from '../atoms/check-button'
import ChevronDownButton from '../atoms/chevron-down-button'

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
          <div className='bg-gray-700 px-3 py-1 rounded-full'>{movie.contentRating}</div>
          <div className='text-gray-300'>{movie.type == "series" ?
            (movie.episodes && movie.episodes + " episode") :
            (movie.duration && movie.duration + " jam")}
          </div>
        </div>
        <div className='flex flex-wrap text-md text-gray-300 width-full'>
          {movie.genres.join(" · ")}
        </div>
      </div>
    </div>
  )
}

export default PosterHover