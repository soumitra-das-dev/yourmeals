import { client } from "@/sanity/client";
import { DUMMY_FOOTER, FooterData } from "./dummy-data";

export async function getFooterData(): Promise<FooterData> {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const footer = await client.fetch(`*[_type == "footer"][0]`);
            if (footer) {
                return {
                    ...DUMMY_FOOTER,
                    ...footer,
                };
            }
        }
    } catch (error) {
        console.warn("Notice: Fetching footer data from Sanity fell back to local data:", error);
    }
    return DUMMY_FOOTER;
}
