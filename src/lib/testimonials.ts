import { client } from "@/sanity/client";

export interface TestimonialItem {
    _id: string;
    name: string;
    review: string;
    platform: string;
    image?: any;
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const testimonials = await client.fetch(`*[_type == "testimonial"] | order(_createdAt asc)`);
            return testimonials || [];
        }
    } catch (error) {
        console.error("Failed to fetch testimonials:", error);
    }
    return [];
}
