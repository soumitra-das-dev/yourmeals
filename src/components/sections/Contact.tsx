'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, Instagram, MapPin } from 'lucide-react'

export function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section ref={ref} id="contact" className="section-padding bg-brand-orange text-white relative">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-sm font-semibold text-orange-100 mb-3">
                        Direct Kitchen Counter
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                        Ready to Order?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-xl mx-auto leading-relaxed">
                        Order your lunch or dinner directly through WhatsApp, or call us for custom catering and monthly mess plans in Jhargram.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-12">
                        <Button
                            size="lg"
                            className="h-16 text-base sm:text-lg font-bold bg-white text-brand-orange hover:bg-orange-50 rounded-xl transition-colors active:scale-[0.98]"
                            asChild
                        >
                            <a href="https://wa.me/919064967577?text=Hello%20YourMeals!%20I%20would%20like%20to%20order." target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-6 w-6 text-emerald-600" />
                                <span>WhatsApp: +91 90649 67577</span>
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            className="h-16 text-base sm:text-lg font-bold bg-brand-orange-dark text-white hover:bg-brand-orange-dark/90 rounded-xl transition-colors active:scale-[0.98]"
                            asChild
                        >
                            <a href="tel:+919064967577">
                                <Phone className="mr-2 h-5 w-5" />
                                <span>Call: +91 90649 67577</span>
                            </a>
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/95 text-sm">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 shrink-0 text-orange-200" />
                            <span>Near Barnali Playground, Uttar Bamda, Jhargram, 721507</span>
                        </div>
                        <span className="hidden sm:inline text-white/50">•</span>
                        <a
                            href="https://www.instagram.com/yourmeals.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 hover:text-white underline decoration-white/40 hover:decoration-white transition-colors"
                        >
                            <Instagram className="w-4 h-4 text-orange-200" />
                            <span>@yourmeals.in</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
