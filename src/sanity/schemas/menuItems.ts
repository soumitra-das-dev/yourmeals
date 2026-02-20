import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'price',
            title: 'Price (₹)',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'spicyLevel',
            title: 'Spicy Level',
            type: 'string',
            options: {
                list: [
                    { title: 'Mild', value: 'Mild' },
                    { title: 'Medium', value: 'Medium' },
                    { title: 'High', value: 'High' },
                    { title: 'Extra Hot', value: 'Extra Hot' },
                ],
            },
            initialValue: 'Medium',
        }),
        defineField({
            name: 'platform',
            title: 'Available Platform',
            type: 'string',
            options: {
                list: [
                    { title: 'All', value: 'All' },
                    { title: 'Swiggy', value: 'Swiggy' },
                    { title: 'Zomato', value: 'Zomato' },
                    { title: 'Direct', value: 'Direct' },
                ],
            },
            initialValue: 'All',
        }),
        defineField({
            name: 'popular',
            title: 'Popular',
            type: 'boolean',
            description: 'Show a Popular badge on this item',
            initialValue: false,
        }),
        defineField({
            name: 'swiggyLink',
            title: 'Swiggy Order Link',
            type: 'url',
            description: 'Direct link to order this item on Swiggy',
        }),
        defineField({
            name: 'zomatoLink',
            title: 'Zomato Order Link',
            type: 'url',
            description: 'Direct link to order this item on Zomato',
        }),
    ],
})
