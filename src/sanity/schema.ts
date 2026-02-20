import { type SchemaTypeDefinition } from 'sanity'

import hero from './schemas/hero'
import menuItems from './schemas/menuItems'
import plans from './schemas/plans'
import testimonials from './schemas/testimonials'
import contact from './schemas/contact'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [hero, menuItems, plans, testimonials, contact],
}
