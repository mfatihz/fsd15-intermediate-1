import clsx from 'clsx'
import ChillLogo from "../atoms/chill-logo"
import NavigationalLinks from "../molecules/navigational-links"
import SettingMenu from "./setting-menu"

function HomeHeader({ navData, menuData, padding }) {
  const baseStyle = "w-full flex gap-4 sm:gap-8 items-center bg-[#181A1C]";

  return (
    <header className={clsx(baseStyle, padding)}>
      <ChillLogo className="hover:animate-bounce duration-700"/>
      <NavigationalLinks links={ navData } />
      <SettingMenu links={ menuData } className="ml-auto"/>
    </header>
  )
}

export default HomeHeader