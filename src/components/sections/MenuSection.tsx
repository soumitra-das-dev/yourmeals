import { getMenuItems } from "@/lib/menu";
import MenuGrid from "./MenuGrid";

export const revalidate = 60;

export default async function MenuSection() {
    const menuItems = await getMenuItems();

    return (
        <MenuGrid
            items={menuItems}
            limit={4}
            showViewAll={true}
        />
    );
}
