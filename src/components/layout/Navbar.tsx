'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu as MenuIcon, X, ShoppingBag, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/#menu' },
  { name: 'How to Order', href: '/#how-to-order' },
  { name: 'Plans', href: '/#plans' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100/50 py-3.5'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center overflow-hidden text-white shadow-md shadow-brand-orange/20 group-hover:scale-105 transition-transform duration-300">
              <Image src="/logo.png" alt="YourMeals Logo" width={40} height={40} className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">
                YOURMEALS
              </span>
              <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase -mt-1 hidden sm:block">
                Jhargram's Kitchen
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger Button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-orange-50 hover:bg-orange-100 text-brand-orange-dark border border-orange-200/60 font-medium text-sm transition-all duration-200 shadow-xs"
              aria-label={`Open Cart (${totalItems} items)`}
            >
              <ShoppingBag className="w-4 h-4 text-brand-orange" />
              <span className="hidden sm:inline font-semibold">Cart</span>
              {totalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center tabular-nums shadow-xs">
                  {totalItems}
                </span>
              )}
            </button>

            {/* WhatsApp Direct CTA */}
            <Button
              className="hidden lg:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-5 py-2 font-semibold text-sm shadow-sm hover:shadow-md transition-all gap-2"
              asChild
            >
              <a
                href="https://wa.me/919064967577?text=Hello%20YourMeals!%20I'd%20like%20to%20order."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-brand-orange rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-white/95 backdrop-blur-xl border-b border-orange-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-display font-medium text-gray-900 hover:text-brand-orange transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    openCart()
                  }}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-6 text-base font-semibold flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5 text-brand-orange" />
                  <span>View Cart ({totalItems} items)</span>
                </Button>

                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-6 text-base font-semibold flex items-center justify-center gap-2"
                  asChild
                >
                  <a
                    href="https://wa.me/919064967577?text=Hello%20YourMeals!%20I'd%20like%20to%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp: +91 90649 67577</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
