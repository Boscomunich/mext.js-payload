// collections/orders.ts
import type { CollectionConfig } from 'payload';

export const Orders: CollectionConfig = {
    slug: 'orders',
    fields: [
        {
            name: 'orderNumber',
            type: 'text',
            required: true,
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
        },
        {
            name: 'items',
            type: 'array',
            fields: [
                {
                    name: 'product',
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
            ],
        },
        {
            name: 'totalAmount',
            type: 'number',
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            options: [
                {
                    label: 'Pending',
                    value: 'pending',
                },
                {
                    label: 'Shipped',
                    value: 'shipped',
                },
                {
                    label: 'Delivered',
                    value: 'delivered',
                },
                {
                    label: 'Cancelled',
                    value: 'cancelled',
                },
            ],
            required: true,
            defaultValue: 'pending',
        },
    ],
};
