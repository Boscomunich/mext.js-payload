import type { CollectionConfig } from 'payload';

export const Admins: CollectionConfig = {
    slug: 'admins',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        {
        name: 'email',
        type: 'email',
        required: true,
        },
        {
        name: 'password',
        type: 'text',
        required: true,
        },
    ],
};
