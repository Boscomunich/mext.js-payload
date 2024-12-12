// collections/ambulances.ts
import type { CollectionConfig } from 'payload';

export const Ambulances: CollectionConfig = {
    slug: 'ambulances',
    fields: [
        {
            name: 'ambulanceNumber',
            type: 'text',
            required: true,
        },
        {
            name: 'driverName',
            type: 'text',
            required: true,
        },
        {
            name: 'contactNumber',
            type: 'text',
            required: true,
        },
        {
            name: 'location',
            type: 'text',
            required: true,
        },
        { 
            name: 'rider', 
            type: 'relationship', 
            relationTo: 'users', 
            admin: { condition: (data) => data.role === 'rider' }
        },
    ],
};
