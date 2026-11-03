import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menuItem',
    title: 'Menu Items',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Dish Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'price',
            title: 'Price (INR)',
            type: 'number',
            validation: (rule) => rule.required().min(0),
        }),
        defineField({
            name: 'image',
            title: 'Dish Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
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
            title: 'Ordering Platform',
            type: 'string',
            options: {
                list: [
                    { title: 'Direct WhatsApp', value: 'Direct' },
                    { title: 'All', value: 'All' },
                ],
            },
            initialValue: 'Direct',
        }),
        defineField({
            name: 'popular',
            title: 'Popular Dish',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'tags',
            title: 'Categories & Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Veg', value: 'Veg' },
                    { title: 'Non-Veg', value: 'Non-Veg' },
                    { title: 'Snacks', value: 'Snacks' },
                    { title: 'Starter', value: 'Starter' },
                    { title: 'Main Course', value: 'Main Course' },
                ],
            },
        }),
    ],
})
