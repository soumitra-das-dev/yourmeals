import { client } from "@/sanity/client";
import { DUMMY_HERO } from "./dummy-data";

export interface HeroData {
    title?: string;
    subtitle?: string;
    heroImage?: any;
    ctaText1?: string;
    ctaLink1?: string;
    ctaText2?: string;
    ctaLink2?: string;
}

export async function getHeroData(): Promise<HeroData> {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const data = await client.fetch(`*[_type == "hero"][0]`);
            if (data) return data;
        }
    } catch (error) {
        console.warn("Notice: Fetching hero data from Sanity fell back to local data:", error);
    }
    return DUMMY_HERO;
}
