import { client } from "@/sanity/client";
import { DUMMY_TESTIMONIALS } from "./dummy-data";

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
            if (testimonials && testimonials.length > 0) {
                return testimonials;
            }
        }
    } catch (error) {
        console.warn("Notice: Fetching testimonials from Sanity fell back to local data:", error);
    }
    return DUMMY_TESTIMONIALS;
}
