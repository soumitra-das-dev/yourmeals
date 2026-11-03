import { getMenuItems } from "@/lib/menu";
import { Navbar, Footer, MenuGrid, Button } from "@/components";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Kitchen Menu | YourMeals Jhargram",
  description: "Explore our complete menu of freshly cooked home-style Indian meals and specials available for direct WhatsApp delivery in Jhargram.",
};

export default async function MenuPage() {
  const menuItems = await getMenuItems();

  return (
    <main className="min-h-dvh bg-white">
      <Navbar />

      <div className="pt-28 pb-16">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl mb-4">
          <Button variant="ghost" asChild className="hover:text-brand-orange -ml-3 gap-1 text-sm font-medium">
            <Link href="/">
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>

        <MenuGrid
          items={menuItems}
          title="Our Complete Menu"
          subtitle="All dishes are prepared fresh to order using quality ingredients and traditional home recipes. Add to cart to order directly via WhatsApp."
        />
      </div>

      <Footer />
    </main>
  );
}
