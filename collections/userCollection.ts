import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    fields: [
        {
            name: 'username',
            type: 'text',
            required: true,
        },
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
        {
            name: 'role',
            type: 'select',
            options: [
                {
                    label: 'User',
                    value: 'user',
                },
                {
                    label: 'Doctor',
                    value: 'doctor',
                },
                {
                    label: 'Rider',
                    value: 'rider',
                },
                {
                    label: 'Vendor',
                    value: 'vendor',
                },
            ],
            required: true,
        },
        // Role-specific fields
        {
            name: 'doctorFields',
            type: 'group',
            admin: {
            condition: (data) => data.role === 'doctor',
            },
            fields: [
                {
                    name: 'specialization',
                    type: 'text',
                },
                {
                    name: 'phone',
                    type: 'text',
                },
                {
                    name: 'address',
                    type: 'text',
                },
                {
                    name: "consultations",
                    type: "number"
                },
            ],
        },
        {
            name: 'riderFields',
            type: 'group',
            admin: {
                condition: (data) => data.role === 'rider',
            },
            fields: [
                {
                    name: 'vehicleType',
                    type: 'text',
                },
                {
                    name: 'licenseNumber',
                    type: 'text',
                },
            ],
        },
        {
            name: 'vendorFields',
            type: 'group',
            admin: {
                condition: (data) => data.role === 'vendor',
            },
            fields: [
                {
                    name: 'companyName',
                    type: 'text',
                },
                {
                    name: 'products',
                    type: 'array',
                    fields: [
                        {
                            name: 'productName',
                            type: 'text',
                        },
                        {
                            name: 'price',
                            type: 'number',
                        },
                    ],
                },
            ],
        },
    ],
};
