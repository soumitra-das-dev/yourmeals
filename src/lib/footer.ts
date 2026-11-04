import { client } from "@/sanity/client";

export interface FooterData {
    _id?: string;
    brandName?: string;
    tagline?: string;
    phone?: string;
    whatsappNumber?: string;
    email?: string;
    address?: string;
    instagramUrl?: string;
    whatsappUrl?: string;
    facebookUrl?: string;
    threadsUrl?: string;
    twitterUrl?: string;
    youtubeUrl?: string;
    linkedinUrl?: string;
    copyrightText?: string;
}

export async function getFooterData(): Promise<FooterData | null> {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const footer = await client.fetch(`*[_type == "footer"][0]`);
            return footer || null;
        }
    } catch (error) {
        console.error("Failed to fetch footer data from Sanity:", error);
    }
    return null;
}
