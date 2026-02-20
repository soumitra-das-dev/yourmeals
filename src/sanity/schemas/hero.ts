import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'ctaLink1',
            title: 'CTA Link 1 (Primary)',
            type: 'url',
            description: 'URL for primary button (use #menu for scroll-to-menu)',
            validation: (Rule) => Rule.uri({ allowRelative: true }),
        }),
        defineField({
            name: 'ctaLink2',
            title: 'CTA Link 2 (Secondary)',
            type: 'url',
            description: 'URL for secondary button (e.g. WhatsApp link)',
            validation: (Rule) => Rule.uri({ allowRelative: true }),
        }),
    ],
})
