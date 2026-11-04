import { client } from "@/sanity/client";
import { DUMMY_MENU_ITEMS } from "./dummy-data";

export interface MenuItem {
    _id: string;
    name: string;
    description: string;
    price: number;
    spicyLevel: string;
    image: any;
    popular?: boolean;
    tags?: string[];
}

export async function getMenuItems(): Promise<MenuItem[]> {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const menuItems = await client.fetch(`*[_type == "menuItem"] | order(_createdAt asc)`);
            if (menuItems && menuItems.length > 0) {
                return menuItems;
            }
        }
    } catch (error) {
        console.warn("Notice: Fetching menu items from Sanity fell back to local data:", error);
    }
    return DUMMY_MENU_ITEMS;
}
