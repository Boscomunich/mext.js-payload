// collections/inventory.ts
import type { CollectionConfig } from 'payload';

export const Inventory: CollectionConfig = {
    slug: 'inventory',
    fields: [
        {
            name: 'productName',
            type: 'text',
            required: true,
        },
        {
            name: 'quantity',
            type: 'number',
            required: true,
        },
        {
            name: 'price',
            type: 'number',
            required: true,
        },
        {
            name: 'vendor',
            type: 'relationship',
            relationTo: 'users',
            admin: { condition: (data) => data.role === 'vendor' },
            required: true,
        },
    ],
};
