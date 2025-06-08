import clsx from 'clsx'
import { useMemo } from "react"

const defaultImages = import.meta.glob('../../assets/images/hero/*', {
    eager: true,
    query: '?url',
    import: 'default'
})

function HeroContainer({ imageUrl, children, className='' }) {
    const baseStyle=`
        flex
        w-screen box-border
        h-[225px] sm:h-[300px] md:h-[587px]
        bg-[#0f0f1a]
        overflow-x-hidden bg-cover bg-center bg-no-repeat
    `

    const imagePath = `../../assets/images/hero/${imageUrl}`
    
    const heroImage = useMemo(() => {
        return defaultImages[imagePath] ||
            defaultImages['../../assets/images/hero/hero.svg']
    }, [imagePath])
    
    return (
        <div
            className={clsx(baseStyle, className)}
            
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${heroImage})`
                // backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(src/assets/images/hero/${imageUrl})` bisa direct seperti ini
            }}
        >
            { children }
        </div>
    )
}

export default HeroContainer
