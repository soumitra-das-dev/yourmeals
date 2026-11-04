'use client';

import {
    Utensils,
    MessageCircle,
    MapPin,
    Mail,
    Phone,
    ArrowRight,
    Heart,
    AtSign,
    SlidersHorizontal,
} from 'lucide-react';
import {
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
} from '@/components/ui/brand-icons';
import Image from 'next/image';
import Link from 'next/link';
import { FooterData } from '@/lib/footer';

interface FooterProps {
    data?: FooterData | null;
}

const DEFAULT_FOOTER: FooterData = {
    brandName: 'YOURMEALSKITCHEN.COM',
    tagline: 'Bringing the authentic taste of homemade Indian cuisine to your doorstep. Fresh, spicy, and delivered with love in Jhargram.',
    phone: '+91 90649 67577',
    whatsappNumber: '+91 90649 67577',
    email: 'hello@yourmealskitchen.com',
    address: 'Near Barnali Playground, Uttar Bamda, Jhargram, West Bengal 721507',
    instagramUrl: 'https://www.instagram.com/yourmeals.in',
    whatsappUrl: 'https://wa.me/919064967577',
    facebookUrl: 'https://www.facebook.com/share/1GNZAucfKd/',
    threadsUrl: 'https://www.threads.com/@yourmeals.in',
    twitterUrl: 'https://x.com/Yourmeals_in',
    youtubeUrl: 'https://www.youtube.com/@yourmealskitchen',
    linkedinUrl: 'https://www.linkedin.com/company/yourmeals/',
    copyrightText: 'YOURMEALSKITCHEN.COM',
};

export function Footer({ data }: FooterProps) {
    const footer = {
        ...DEFAULT_FOOTER,
        ...(data || {}),
    };

    return (
        <footer className="bg-zinc-50 dark:bg-black py-20 border-t border-border/50 relative overflow-hidden"> {/* taste-skill-ignore */}
            <div className="container px-6 md:px-6 relative z-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white overflow-hidden">
                                <Image src="/logo.png" alt="Logo" width={24} height={24} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-2xl font-bold font-heading tracking-tight">{footer.brandName}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {footer.tagline}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {footer.instagramUrl && (
                                <Link
                                    href={footer.instagramUrl}
                                    title="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-pink-500 hover:border-pink-500 transition-colors duration-200"
                                >
                                    <InstagramIcon className="w-5 h-5" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                            )}
                            {footer.whatsappUrl && (
                                <Link
                                    href={footer.whatsappUrl}
                                    title="WhatsApp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-emerald-600 hover:border-emerald-600 transition-colors duration-200"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span className="sr-only">WhatsApp</span>
                                </Link>
                            )}
                            {footer.facebookUrl && (
                                <Link
                                    href={footer.facebookUrl}
                                    title="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-600 transition-colors duration-200"
                                >
                                    <FacebookIcon className="w-5 h-5" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                            )}
                            {footer.threadsUrl && (
                                <Link
                                    href={footer.threadsUrl}
                                    title="Threads"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-colors duration-200"
                                >
                                    <AtSign className="w-5 h-5" />
                                    <span className="sr-only">Threads</span>
                                </Link>
                            )}
                            {footer.twitterUrl && (
                                <Link
                                    href={footer.twitterUrl}
                                    title="X (Twitter)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors duration-200"
                                >
                                    <TwitterIcon className="w-5 h-5" />
                                    <span className="sr-only">X (Twitter)</span>
                                </Link>
                            )}
                            {footer.youtubeUrl && (
                                <Link
                                    href={footer.youtubeUrl}
                                    title="YouTube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-red-500 hover:border-red-500 transition-colors duration-200"
                                >
                                    <YoutubeIcon className="w-5 h-5" />
                                    <span className="sr-only">YouTube</span>
                                </Link>
                            )}
                            {footer.linkedinUrl && (
                                <Link
                                    href={footer.linkedinUrl}
                                    title="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:border-blue-500 transition-colors duration-200"
                                >
                                    <LinkedinIcon className="w-5 h-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Menu', href: '/menu' },
                                { name: 'How to Order', href: '/#how-to-order' },
                                { name: 'Meal Plans', href: '/#plans' },
                                { name: 'About Us', href: '/#about' },
                                { name: 'Contact', href: '/#contact' },
                                {
                                    name: 'Order via WhatsApp',
                                    href: footer.whatsappUrl || 'https://wa.me/919064967577',
                                    external: true,
                                },
                                {
                                    name: 'Update Data in Sanity Studio',
                                    href: '/studio',
                                    external: true,
                                },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-[opacity,margin] duration-200" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>{footer.address}</span>
                            </li>
                            {footer.phone && (
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <Phone className="w-5 h-5 text-primary shrink-0" />
                                    <a href={`tel:${footer.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">
                                        {footer.phone}
                                    </a>
                                </li>
                            )}
                            {footer.whatsappNumber && (
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                                    <a
                                        href={footer.whatsappUrl || `https://wa.me/${footer.whatsappNumber.replace(/[^0-9]/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-emerald-600 transition-colors"
                                    >
                                        WhatsApp: {footer.whatsappNumber}
                                    </a>
                                </li>
                            )}
                            {footer.email && (
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <Mail className="w-5 h-5 text-primary shrink-0" />
                                    <a href={`mailto:${footer.email}`} className="hover:text-primary transition-colors">
                                        {footer.email}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"> {/* taste-skill-ignore */}
                    <div className="flex flex-wrap items-center gap-3">
                        <p>&copy; {new Date().getFullYear()} {footer.copyrightText || footer.brandName}. All rights reserved.</p>
                        <span className="hidden sm:inline text-gray-300">•</span>
                        <Link
                            href="/studio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold text-gray-600 hover:text-brand-orange bg-zinc-100 hover:bg-orange-50 border border-gray-200 transition-colors"
                            title="Open Sanity Studio to update dishes, plans, reviews & footer data"
                        >
                            <SlidersHorizontal className="w-3.5 h-3.5" />
                            <span>Update in Sanity Studio</span>
                        </Link>
                    </div>

                    <p className="flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{' '}
                        <Link
                            href="https://www.instagram.com/soumzy.d_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:text-primary transition-colors"
                        >
                            Soumo
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
