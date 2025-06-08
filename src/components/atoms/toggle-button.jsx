import ChevronDown from './images/chevron-down.svg';
import ChevronRight from './images/chevron-right.svg';

const ToggleButton = ({ isOpen }) => {
  const icon = isOpen ? ChevronDown : ChevronRight;
  return (
    <img
      src={icon}
      alt={isOpen ? 'Chevron down icon' : 'Chevron right icon'}
      className="w-4 h-4"
    />
  );
};

export default ToggleButton;