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
        <section ref={ref} id="contact" className="section-padding bg-linear-to-br from-brand-orange to-brand-orange-dark text-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
                        Ready to Order?
                    </h2>
                    <p className="text-xl text-white/90 mb-12">
                        Get in touch for monthly plans or order directly on Swiggy & Zomato
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="h-16 text-lg font-semibold bg-white text-brand-orange hover:bg-orange-50"
                            asChild
                        >
                            <a href="https://wa.me/919064967577" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-6 w-6" />
                                WhatsApp: +91 90649 67577
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="secondary"
                            className="h-16 text-lg font-semibold bg-white/10 text-white hover:bg-white/20 border-2 border-white/20 backdrop-blur-sm"
                            asChild
                        >
                            <a href="tel:+919064967577">
                                <Phone className="mr-2 h-6 w-6" />
                                Call: +91 90649 67577
                            </a>
                        </Button>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-white/80 text-center">
                        <div className="flex items-start gap-2">
                            <MapPin className="w-5 h-5" />
                            <span>Near Barnali Playground, Uttar Bamda, Jhargram, 721507</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <a
                            href="https://www.instagram.com/yourmeals.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                            <span>@yourmeals.in</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
