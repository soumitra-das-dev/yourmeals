import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'footer',
    title: 'Footer Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'brandName',
            title: 'Brand / Company Name',
            type: 'string',
            initialValue: 'YOURMEALSKITCHEN.COM',
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline / Bio',
            type: 'text',
            initialValue:
                'Bringing the authentic taste of homemade Indian cuisine to your doorstep. Fresh, spicy, and delivered with love in Jhargram.',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            initialValue: '+91 90649 67577',
        }),
        defineField({
            name: 'whatsappNumber',
            title: 'WhatsApp Contact',
            type: 'string',
            initialValue: '+91 90649 67577',
        }),
        defineField({
            name: 'email',
            title: 'Contact Email',
            type: 'string',
            initialValue: 'hello@yourmealskitchen.com',
        }),
        defineField({
            name: 'address',
            title: 'Physical / Kitchen Address',
            type: 'text',
            initialValue:
                'Near Barnali Playground, Uttar Bamda, Jhargram, West Bengal 721507',
        }),
        defineField({
            name: 'instagramUrl',
            title: 'Instagram Link',
            type: 'url',
            initialValue: 'https://www.instagram.com/yourmeals.in',
        }),
        defineField({
            name: 'whatsappUrl',
            title: 'WhatsApp Order Link',
            type: 'url',
            initialValue: 'https://wa.me/919064967577',
        }),
        defineField({
            name: 'facebookUrl',
            title: 'Facebook Link',
            type: 'url',
            initialValue: 'https://www.facebook.com/share/1GNZAucfKd/',
        }),
        defineField({
            name: 'threadsUrl',
            title: 'Threads Link',
            type: 'url',
            initialValue: 'https://www.threads.com/@yourmeals.in',
        }),
        defineField({
            name: 'twitterUrl',
            title: 'X / Twitter Link',
            type: 'url',
            initialValue: 'https://x.com/Yourmeals_in',
        }),
        defineField({
            name: 'youtubeUrl',
            title: 'YouTube Link',
            type: 'url',
            initialValue: 'https://www.youtube.com/@yourmealskitchen',
        }),
        defineField({
            name: 'linkedinUrl',
            title: 'LinkedIn Link',
            type: 'url',
            initialValue: 'https://www.linkedin.com/company/yourmeals/',
        }),
    ],
})
