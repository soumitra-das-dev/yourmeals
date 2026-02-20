import { getMenuItems } from "@/lib/menu";
import MenuGrid from "@/components/MenuGrid";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Our Full Menu - YourMeals",
    description: "Explore our complete range of freshly prepared, hot, and spicy meals.",
};

export default async function MenuPage() {
    const menuItems = await getMenuItems();

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-12"> {/* Add padding for fixed navbar */}
                <div className="container px-4 md:px-6 mb-8">
                    <Button variant="ghost" asChild className="hover:text-brand-orange -ml-4">
                        <Link href="/" className="flex items-center gap-1 font-medium">
                            <ChevronLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                <div className="-mt-24"> {/* Offset the MenuGrid's internal padding */}
                    <MenuGrid
                        items={menuItems}
                        title="Our Full Menu"
                        subtitle="Choose from our wide variety of delicious meals, all prepared with love and fresh ingredients."
                    />
                </div>
            </div>
            <Footer />
        </main>
    );
}
