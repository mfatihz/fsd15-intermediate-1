import CoverImage from './cover-image'
import PlayButton from './play-button'
import CheckButton from './check-button'
import ChevronDownButton from './chevron-down-button'

function PosterHover({children}) {
  return (
    <div className='bg-gray-700 px-3 py-1 rounded-full'>{ children }</div>
  )
}

export default PosterHover