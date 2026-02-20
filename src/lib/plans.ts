import { client } from "@/sanity/client";

export interface PlanItem {
    _id: string;
    title: string;
    subtitle?: string;
    price: string;
    features: string[];
    highlight?: boolean;
    ctaText?: string;
    ctaLink?: string;
}

export async function getPlans(): Promise<PlanItem[]> {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const plans = await client.fetch(`*[_type == "plan"] | order(_createdAt asc)`);
            return plans || [];
        }
    } catch (error) {
        console.error("Failed to fetch plans:", error);
    }
    return [];
}
