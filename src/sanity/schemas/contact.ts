import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contact',
    title: 'Contact Info',
    type: 'document',
    fields: [
        defineField({
            name: 'whatsappNumber',
            title: 'WhatsApp Number',
            type: 'string',
            description: 'Format: 919876543210 (without +)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'serviceAreas',
            title: 'Service Areas',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: ["Surendranagar"],
        }),
        defineField({
            name: 'deliveryTime',
            title: 'Delivery Time',
            type: 'string',
            initialValue: "11:00 AM - 11:00 PM",
        }),
        defineField({
            name: 'address',
            title: 'Kitchen Address',
            type: 'text',
        }),
    ],
})
