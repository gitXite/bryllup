import React from 'react';

export type Side = 'left' | 'right';

export interface ProgramItem {
    time: string;
    title: string;
    desc: string;
    side: Side;
}

export interface InfoCard {
    readonly title: string;
    readonly body: string;
    readonly link?: {
        href: string;
        label: string;
        icon: React.ComponentType;
        external: boolean;
    };
}

export interface RSVPPayload {
    fname: string;
    lname: string;
    email: string;
    attending: 'ja' | 'nei';
    guests: number;
    allergies: string;
    message: string;
}

export interface WishlistItem {
    id: string;
    name: string;
    brand: string;
    price: number;
    totalAmount: number;
    amountReserved: number;
    description: string;
    longDescription: string;
    image: string;
    link: string;
    category: string;
    reserved?: boolean;
}
