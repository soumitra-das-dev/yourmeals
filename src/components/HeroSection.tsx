import { getHeroData } from "@/lib/hero";
import { Hero } from "@/components/sections/Hero";

export const revalidate = 60;

export default async function HeroSection() {
    const heroData = await getHeroData();

    return (
        <Hero
            ctaText1={heroData?.ctaText1}
            ctaLink1={heroData?.ctaLink1}
            ctaText2={heroData?.ctaText2}
            ctaLink2={heroData?.ctaLink2}
        />
    );
}
