import clsx from 'clsx'
import NewEpisodeBadge from '../atoms/new-episode-badge'
import PosterImage from '../atoms/poster-image'
import PosterTitle from '../atoms/poster-title'
import Top10Badge from '../atoms/top-10-badge'
import UserRating from '../atoms/user-rating'

function PosterDefault({
  movie,
  type,
}) {
  const baseStyle = "relative overflow-hidden cursor-pointer"
  const roundedClass = type === 'continue' ? 'rounded-none' : 'rounded-lg'
  const widthClass = type === 'continue' ? 'w-[281px] sm:w-[302px]' : 'w-[94px] sm:w-[234px]'
  const heightClass = type === 'continue' ? 'h-[151px] sm:h-[162px]' : 'h-[146px] sm:h-[365px]'
  const imgSrc = type === 'continue' ? movie.images.landscape : movie.images.portrait
  
  return (
    <figure
      className={clsx(baseStyle, widthClass, heightClass, roundedClass)}
      /* className={`
        relative overflow-hidden cursor-pointer
        ${roundedClass} ${widthClass} ${heightClass}
        `
      } */
    >
        <PosterImage src={imgSrc} />
        
        {movie.badges.includes("new") && <NewEpisodeBadge className='absolute top-2.5 left-2.5'/>}
        {movie.badges.includes("top") && <Top10Badge className='absolute top-0 right-2.5'/>}

        <PosterTitle className='absolute bottom-2.5 left-2.5'>{movie.title}</PosterTitle>
        <UserRating className="absolute bottom-2.5 right-2.5">{movie.userRating}</UserRating>
    </figure>
  )
}

export default PosterDefault