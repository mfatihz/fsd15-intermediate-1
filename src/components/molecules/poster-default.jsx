import clsx from 'clsx'
import NewEpisodeBadge from '../atoms/new-episode-badge'
import CoverImage from '../atoms/cover-image'
import PosterTitle from '../atoms/poster-title'
import Top10Badge from '../atoms/top-10-badge'
import UserRating from '../atoms/user-rating-label'

function PosterDefault({
  movie,
  galleryType="",
  className=""
}) {
  const baseStyle = "relative w-full h-full overflow-hidden"
  const roundedClass = galleryType === 'continue' ? 'rounded-none' : 'rounded-lg'
  const widthClass = galleryType === 'continue' ? 'w-[181px] sm:w-[272px] md:w-[302px]' : 'w-[140px] sm:w-[211px] md:w-[234px]'
  const heightClass = galleryType === 'continue' ? 'h-[97px] sm:h-[146px] md:h-[162px]' : 'h-[219px] sm:h-[328px] md:h-[365px]'
  const imgSrc = galleryType === 'continue' ? movie?.images.landscape : movie?.images.portrait
  
  return (
    <div
      className={clsx(baseStyle, widthClass, heightClass, roundedClass, className)}
    >
      <CoverImage src={imgSrc} className={clsx(widthClass, heightClass)}/>
      
      {movie.badges.includes("new") && <NewEpisodeBadge className='absolute top-1 sm:top-2.5 left-1 sm:left-2.5'/>}
      {movie.badges.includes("top") && <Top10Badge className='absolute top-0 right-1 sm:right-2.5'/>}

      <PosterTitle className='absolute bottom-1 sm:bottom-2.5 left-1 sm:left-2.5'>{movie.title}</PosterTitle>
      <UserRating className="absolute bottom-1 sm:bottom-2.5 right-1 sm:right-2.5">{movie.userRating}</UserRating>
    </div>
  )
}

export default PosterDefault