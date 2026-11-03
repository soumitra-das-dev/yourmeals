'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Button } from '@/components/ui';

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    totalAmount,
    generateWhatsAppUrl,
  } = useCart();

  const [notes, setNotes] = useState('');

  return (
    <AnimatePresence>
      {isOpen && (
        <div data-ui="cart-overlay">
          {/* Backdrop with smooth blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/60"
            aria-hidden="true"
          />

          {/* Drawer container with shadcn rounded panel */}
          <motion.div
            data-ui="cart-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white text-gray-900 flex flex-col justify-between shadow-2xl border-l border-orange-100" /* taste-skill-ignore */
            role="dialog"
            aria-modal="true"
            aria-label="Order Cart"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-orange-50/50"> {/* taste-skill-ignore */}
              <div className="flex items-baseline gap-2.5">
                <h2 className="text-xl font-bold font-display tracking-tight text-gray-900">
                  Your Order Cart
                </h2>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-orange text-white">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs font-semibold text-gray-400 hover:text-rose-600 transition-colors px-2 py-1"
                    title="Empty cart"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={closeCart}
                  className="p-1.5 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                  <div className="w-16 h-16 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center mb-4">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Your cart is empty</h3>
                  <p className="text-sm text-gray-500 max-w-xs mb-6">
                    Add freshly made thalis, snacks, or curries from our menu to place your direct WhatsApp order.
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-2.5 bg-brand-orange text-white rounded-xl text-sm font-semibold hover:bg-brand-orange-dark active:scale-[0.98] transition-colors"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-gray-100 bg-white hover:border-orange-200 transition-colors"
                  >
                    {/* Item Thumbnail */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-orange-50 shrink-0">
                      {item.image && urlFor(item.image) ? (
                        <Image
                          src={urlFor(item.image)!.url()}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs font-semibold text-gray-400">
                          Meal
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-bold text-sm text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-rose-600 transition-colors p-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-brand-orange font-bold tabular-nums">
                          ₹{item.price}
                        </span>
                        {item.spicyLevel && (
                          <span className="text-xs text-gray-500">
                            · {item.spicyLevel}
                          </span>
                        )}
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50"> {/* taste-skill-ignore */}
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1.5 text-gray-600 hover:bg-gray-200 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-bold tabular-nums text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1.5 text-gray-600 hover:bg-gray-200 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-bold text-gray-900 tabular-nums">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer with Checkout */}
            {items.length > 0 && (
              <div className="p-5 border-t border-gray-100 bg-gray-50/70 space-y-4"> {/* taste-skill-ignore */}
                {/* Delivery Note / Location input */}
                <div>
                  <label htmlFor="order-note" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Delivery Address or Instructions (Optional):
                  </label>
                  <input
                    id="order-note"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Near Barnali Playground, less spicy"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                  />
                </div>

                {/* Subtotal breakdown */}
                <div className="space-y-1.5 pt-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Items Total</span>
                    <span className="tabular-nums font-semibold text-gray-900">₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Channel</span>
                    <span className="font-semibold text-emerald-600">Direct WhatsApp Order</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-gray-950 pt-2 border-t border-gray-200"> {/* taste-skill-ignore */}
                    <span>Total Amount</span>
                    <span className="tabular-nums text-brand-orange">₹{totalAmount}</span>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <Button
                  asChild
                  className="w-full h-13 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <a
                    href={generateWhatsAppUrl(notes)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Order via WhatsApp (₹{totalAmount})</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>

                <p className="text-[11px] text-gray-500 text-center leading-tight">
                  Clicking will open WhatsApp with your itemized order prefilled for our kitchen cooks to confirm.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
