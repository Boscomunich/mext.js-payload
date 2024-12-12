// collections/payments.ts
import type { CollectionConfig } from 'payload';

export const Payments: CollectionConfig = {
    slug: 'payments',
    fields: [
        {
            name: 'paymentId',
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
            name: 'order',
            type: 'relationship',
            relationTo: 'orders',
            required: true,
        },
        {
            name: 'amount',
            type: 'number',
            required: true,
        },
        {
            name: 'paymentMethod',
            type: 'select',
            options: [
                {
                    label: 'Credit Card',
                    value: 'credit_card',
                },
                {
                    label: 'PayPal',
                    value: 'paypal',
                },
                {
                    label: 'Bank Transfer',
                    value: 'bank_transfer',
                },
            ],
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
                    label: 'Completed',
                    value: 'completed',
                },
                {
                    label: 'Failed',
                    value: 'failed',
                },
            ],
            required: true,
            defaultValue: 'pending',
        },
    ],
};
