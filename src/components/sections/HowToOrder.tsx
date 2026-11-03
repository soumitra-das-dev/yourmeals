'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Utensils, MessageCircle, CheckCircle2, Bike, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const workflow = [
    {
        num: '1',
        title: 'Choose Your Food',
        description: 'Explore our daily freshly prepared Indian thalis, regional curries, or snacks. Add dishes to your cart or select directly.',
        icon: Utensils,
        badge: 'Explore Menu',
        iconBg: 'bg-orange-50 text-brand-orange',
    },
    {
        num: '2',
        title: 'Click WhatsApp Order',
        description: 'Hit the WhatsApp order button. Your itemized food list, quantities, and delivery note are pre-filled automatically.',
        icon: MessageCircle,
        badge: 'Click to Chat',
        iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
        num: '3',
        title: 'Direct Confirmation',
        description: 'Our kitchen team checks today’s batch, confirms your location in Jhargram, and gives you an accurate preparation time.',
        icon: CheckCircle2,
        badge: 'Instant Reply',
        iconBg: 'bg-blue-50 text-blue-600',
    },
    {
        num: '4',
        title: 'Delivered to Doorstep',
        description: 'Hot food packed hygienically in leak-proof containers is delivered straight to your home, office, or hostel room.',
        icon: Bike,
        badge: '30–45 Mins',
        iconBg: 'bg-amber-50 text-amber-600',
    },
]

export function HowToOrder() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section ref={ref} id="how-to-order" className="py-16 md:py-24 bg-white relative">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-sm font-semibold text-brand-orange mb-3">
                        Direct Kitchen Workflow
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        How WhatsApp Ordering Works
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        No middleman apps, no surge charges. Connect directly with our kitchen cooks in Jhargram for hot, fresh meals.
                    </p>
                </motion.div>

                {/* Workflow Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {workflow.map((item, index) => (
                        <motion.div
                            key={item.num}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-gray-50/50 rounded-2xl p-6 border border-gray-200 hover:border-brand-orange/40 transition-colors duration-200 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <span className="text-xl font-display font-bold text-brand-orange">
                                        Step {item.num}
                                    </span>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700">
                                        {item.badge}
                                    </span>
                                </div>

                                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}>
                                    <item.icon className="w-6 h-6" />
                                </div>

                                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2.5">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-4 flex items-center text-xs font-semibold text-brand-orange">
                                <span>Kitchen Process</span>
                                <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call-to-action banner below steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-12 p-6 md:p-8 rounded-2xl bg-gray-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <div className="text-center sm:text-left">
                        <h4 className="text-xl md:text-2xl font-bold font-display tracking-tight text-white mb-1">
                            Ready for Lunch or Dinner?
                        </h4>
                        <p className="text-sm text-gray-300 max-w-lg">
                            Check out today’s special curries & daily thalis, then send your order in one click.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <Button
                            className="bg-brand-orange hover:bg-brand-orange-dark active:scale-[0.98] text-white rounded-xl px-6 py-2.5 font-semibold text-sm transition-colors"
                            asChild
                        >
                            <a href="#menu">
                                Browse Menu
                            </a>
                        </Button>
                        <Button
                            className="bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white rounded-xl px-6 py-2.5 font-semibold text-sm transition-colors gap-1.5"
                            asChild
                        >
                            <a
                                href="https://wa.me/919064967577?text=Hello%20YourMeals!%20I'd%20like%20to%20place%20an%20order."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>WhatsApp Us</span>
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
