import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Customer Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'review',
            title: 'Review',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
                list: [
                    { title: 'Instagram', value: 'Instagram' },
                    { title: 'WhatsApp', value: 'WhatsApp' },
                    { title: 'Google', value: 'Google' },
                ],
            },
            initialValue: 'Instagram',
        }),
        defineField({
            name: 'image',
            title: 'Customer Image (Optional)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
