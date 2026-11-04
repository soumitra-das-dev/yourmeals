import { client } from "@/sanity/client";
import { DUMMY_PLANS } from "./dummy-data";

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
            if (plans && plans.length > 0) {
                return plans;
            }
        }
    } catch (error) {
        console.warn("Notice: Fetching plans from Sanity fell back to local data:", error);
    }
    return DUMMY_PLANS;
}
