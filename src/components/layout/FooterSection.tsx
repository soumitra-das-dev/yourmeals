import { getFooterData } from "@/lib/footer";
import { Footer } from "./Footer";

export const revalidate = 60;

export default async function FooterSection() {
    const footerData = await getFooterData();
    return <Footer data={footerData} />;
}
