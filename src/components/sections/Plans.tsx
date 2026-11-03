'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, MessageCircle } from 'lucide-react'

interface PlanData {
    _id: string;
    title: string;
    subtitle?: string;
    price: string;
    features: string[];
    highlight?: boolean;
    ctaText?: string;
    ctaLink?: string;
}

interface PlansProps {
    plans: PlanData[];
}

export function Plans({ plans }: PlansProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    if (!plans || plans.length === 0) {
        return null;
    }

    return (
        <section ref={ref} id="plans" className="section-padding bg-white relative">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-sm font-semibold text-brand-orange mb-3">
                        Jhargram Monthly Mess & Subscriptions
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        Choose Your <span className="text-brand-orange">Meal Plan</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Whether you need a daily student tiffin or a monthly office subscription in Jhargram, we have flexible plans with pause options.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full flex"
                        >
                            <Card className={`p-8 rounded-2xl h-full flex flex-col justify-between transition-colors duration-200 w-full ${
                                plan.highlight
                                    ? 'border-2 border-brand-orange bg-white'
                                    : 'border border-gray-200 hover:border-gray-300 bg-white'
                            }`}>
                                <div>
                                    {plan.highlight && (
                                        <div className="flex justify-center mb-4">
                                            <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full text-center">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <h3 className="font-display text-3xl font-bold text-gray-900 mb-2 text-center tracking-tight">
                                        {plan.title}
                                    </h3>
                                    {plan.subtitle && (
                                        <p className="text-gray-600 text-sm text-center mb-2">{plan.subtitle}</p>
                                    )}
                                    <p className="text-brand-orange font-bold text-center mb-6 text-2xl font-display tracking-tight tabular-nums">
                                        {plan.price}
                                    </p>

                                    <ul className="space-y-3 mb-8 grow text-sm">
                                        {plan.features?.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2.5">
                                                <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                                                <span className="text-gray-700 leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button
                                    className={`w-full py-6 text-base font-semibold rounded-xl transition-colors active:scale-[0.98] ${
                                        plan.highlight
                                            ? 'bg-brand-orange hover:bg-brand-orange-dark text-white'
                                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                                    }`}
                                    size="lg"
                                    asChild
                                >
                                    <a
                                        href={
                                            plan.ctaLink ||
                                            `https://wa.me/919064967577?text=${encodeURIComponent(
                                                `Hello YourMeals! I am interested in your "${plan.title}" meal plan (${plan.price}). Please share details.`
                                            )}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        <span>{plan.ctaText || 'Subscribe via WhatsApp'}</span>
                                    </a>
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
