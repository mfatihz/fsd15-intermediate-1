import muteOnIcon from '../../assets/images/icons/mute-on-icon.svg'

function MuteIcon() {
    return (
        <img
            src={ muteOnIcon }
            alt='Mute on'
            loading="lazy"
            className='h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6'
        />
    )
}

export default MuteIcon
