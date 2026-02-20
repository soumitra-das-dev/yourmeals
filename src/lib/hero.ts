import { client } from "@/sanity/client";

export interface HeroData {
    title?: string;
    subtitle?: string;
    heroImage?: any;
    ctaText1?: string;
    ctaLink1?: string;
    ctaText2?: string;
    ctaLink2?: string;
    ctaText3?: string;
    ctaLink3?: string;
}

export async function getHeroData(): Promise<HeroData | null> {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const data = await client.fetch(`*[_type == "hero"][0]`);
            return data || null;
        }
    } catch (error) {
        console.error("Failed to fetch hero data:", error);
    }
    return null;
}
