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

    // Don't render anything if no plans
    if (!plans || plans.length === 0) {
        return null;
    }

    return (
        <section ref={ref} id="plans" className="section-padding bg-white">
            <div className="container px-6 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        Choose Your <span className="text-gradient">Plan</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Whether you need one meal or a monthly subscription, we have got flexible options
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan._id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className={`p-8 h-full flex flex-col transition-all duration-300 ${plan.highlight
                                ? 'border-2 border-brand-orange shadow-xl md:scale-105 relative z-10'
                                : 'border border-gray-200 hover:border-orange-200 hover:shadow-lg'
                                }`}>
                                {plan.highlight && (
                                    <div className="bg-brand-orange text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 text-center w-fit mx-auto shadow-md">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="font-display text-3xl font-bold text-gray-900 mb-2 text-center">
                                    {plan.title}
                                </h3>
                                {plan.subtitle && (
                                    <p className="text-gray-600 text-center mb-2">{plan.subtitle}</p>
                                )}
                                <p className="text-brand-orange font-bold text-center mb-6 text-lg">{plan.price}</p>

                                <ul className="space-y-3 mb-8 grow">
                                    {plan.features?.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full py-6 text-lg font-semibold ${plan.highlight
                                        ? 'bg-brand-orange hover:bg-brand-orange-dark text-white'
                                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                                        }`}
                                    size="lg"
                                    asChild
                                >
                                    <a href={plan.ctaLink || 'https://wa.me/919064967577'} target="_blank" rel="noopener noreferrer">
                                        {plan.ctaLink?.includes('wa.me') && <MessageCircle className="mr-2 h-5 w-5" />}
                                        {plan.ctaText || 'WhatsApp Us'}
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
