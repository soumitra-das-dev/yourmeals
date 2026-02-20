import { getPlans } from "@/lib/plans";
import { Plans } from "@/components/sections/Plans";

export const revalidate = 60;

export default async function PlansSection() {
    const plans = await getPlans();

    return <Plans plans={plans} />;
}
