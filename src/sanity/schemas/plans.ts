import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'plan',
    title: 'Subscription Plan',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Plan Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
            initialValue: "Office Lunch Box",
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            initialValue: "For working professionals",
        }),
        defineField({
            name: 'price',
            title: 'Price Label',
            type: 'string',
            description: 'e.g. ₹XXX/week or ₹95/meal',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: ["Fresh daily", "Custom spice", "Free delivery"],
        }),
        defineField({
            name: 'highlight',
            title: 'Highlight',
            type: 'boolean',
            description: 'Highlight this plan (e.g. Most Popular)',
            initialValue: false,
        }),
        defineField({
            name: 'ctaText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'WhatsApp Us',
        }),
        defineField({
            name: 'ctaLink',
            title: 'Button Link',
            type: 'url',
            description: 'URL for the plan CTA button',
            validation: (Rule) => Rule.uri({ allowRelative: true }),
        }),
    ],
})
