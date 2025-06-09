import muteOnIcon from '../../assets/images/icons/mute-on-icon.svg'

function HeroMuteButton({ position = '', onClick = null }) {
  return (
    <button
      className={`
        flex items-center justify-center 
        h-8 sm:h-11 w-8 sm:w-11
        px-1 sm:px-2
        rounded-full cursor-pointer bg-[#333]/20
        border border-white/60 box-border
        transition-all duration-200
        hover:scale-105 hover:shadow-md
        ${position == 'right' ? 'ml-auto' : ''}
      `}
      onClick={onClick}
      
    >
      <img
        src={ muteOnIcon }
        alt='Mute on'
        loading="lazy"
        className='h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6'
      />
    </button>
  );
}

export default HeroMuteButton;