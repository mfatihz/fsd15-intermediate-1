import MuteIcon from './mute-icon'

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
      <MuteIcon />
    </button>
  );
}

export default HeroMuteButton;