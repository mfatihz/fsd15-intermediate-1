import clsx from 'clsx'
import NewEpisodeBadge from '../atoms/new-episode-badge'
import CoverImage from '../atoms/cover-image'
import PosterTitle from '../atoms/poster-title'
import Top10Badge from '../atoms/top-10-badge'
import UserRating from '../atoms/user-rating-label'
import PosterHover from './poster-hover'
import { useState } from 'react'

function PosterDefault({
  movie,
  galleryType,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const baseStyle = "relative overflow-visible cursor-pointer"
  const roundedClass = galleryType === 'continue' ? 'rounded-none' : 'rounded-lg'
  const widthClass = galleryType === 'continue' ? 'w-[281px] sm:w-[302px]' : 'w-[94px] sm:w-[234px]'
  const heightClass = galleryType === 'continue' ? 'h-[151px] sm:h-[162px]' : 'h-[146px] sm:h-[365px]'
  const imgSrc = galleryType === 'continue' ? movie.images.landscape : movie.images.portrait
  
  return (
    <div
      className={clsx(baseStyle, widthClass, heightClass, roundedClass)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Poster Content */}
      <div className="relative w-full h-full overflow-hidden rounded-[inherit]">
        <CoverImage src={imgSrc} />
        
        {movie.badges.includes("new") && <NewEpisodeBadge className='absolute top-2.5 left-2.5'/>}
        {movie.badges.includes("top") && <Top10Badge className='absolute top-0 right-2.5'/>}

        <PosterTitle className='absolute bottom-2.5 left-2.5'>{movie.title}</PosterTitle>
        <UserRating className="absolute bottom-2.5 right-2.5">{movie.userRating}</UserRating>
      </div>

      {/* Hover Poster */}
      {isHovered && galleryType !== 'continue' && (
        <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <PosterHover movie={movie} />
        </div>
      )}
    </div>
  )
}

export default PosterDefault