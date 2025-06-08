import HeroActions from "../molecules/hero-actions"
import HeroTitle from "../atoms/hero-title"
import HeroSummary from "../atoms/hero-summary"
import HeroContainer from "../atoms/hero-container"

function Hero({ movie, className }) {
    return (
        <HeroContainer imageUrl={movie?.images.hero} className={className}>
            <div className="w-full self-end flex flex-col gap-2 md:gap-4">
                <HeroTitle>{ movie?.title }</HeroTitle>
                <HeroSummary>{ movie?.summary }</HeroSummary>
                <HeroActions>{ movie?.contentRating }</HeroActions>
            </div>
        </HeroContainer>
    )
}

export default Hero