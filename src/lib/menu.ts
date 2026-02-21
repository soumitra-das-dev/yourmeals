import { client } from "@/sanity/client";

export interface MenuItem {
    _id: string;
    name: string;
    description: string;
    price: number;
    spicyLevel: string;
    image: any;
    popular?: boolean;
    swiggyLink?: string;
    zomatoLink?: string;
    tags?: string[];
}

export async function getMenuItems(): Promise<MenuItem[]> {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const menuItems = await client.fetch(`*[_type == "menuItem"] | order(_createdAt asc)`);
            return menuItems || [];
        }
    } catch (error) {
        console.error("Failed to fetch menu items:", error);
    }
    return [];
}
