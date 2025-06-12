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
  const widthClass = galleryType === 'continue' ? 'w-[281px] sm:w-[302px]' : 'w-[94px] sm:w-[234px]'
  const heightClass = galleryType === 'continue' ? 'h-[151px] sm:h-[162px]' : 'h-[146px] sm:h-[365px]'
  const imgSrc = galleryType === 'continue' ? movie?.images.landscape : movie?.images.portrait
  
  return (
    <div
      className={clsx(baseStyle, widthClass, heightClass, roundedClass, className)}
    >
      <CoverImage src={imgSrc} />
      
      {movie.badges.includes("new") && <NewEpisodeBadge className='absolute top-2.5 left-2.5'/>}
      {movie.badges.includes("top") && <Top10Badge className='absolute top-0 right-2.5'/>}

      <PosterTitle className='absolute bottom-2.5 left-2.5'>{movie.title}</PosterTitle>
      <UserRating className="absolute bottom-2.5 right-2.5">{movie.userRating}</UserRating>
    </div>
  )
}

export default PosterDefault