import ExternalLinkElement from './components/ExternalLinkElement';
import GiftElement from './components/GiftElement';
import { InfoCard } from '@/types';

export const wedding = {
    name1: 'Maren',
    name2: 'Daniel',
    dateDisplay: 'Lørdag 21. august 2027',
    dateISO: '2027-08-21T14:00:00',
    venue: 'Hardingasete',
    city: 'Tørvikbygd',
    rsvpDeadline: '2027',
    toastmaster: {
        name: 'XX',
        email: 'XX',
    },
    hotel: {
        name: 'Hardingasete',
        code: '',
        url: 'https://www.hardingasete.no/',
    },
    bankAccount: 'XX',
    mapsUrl:
        'https://www.google.com/maps/place/Hardingasete/@60.2506742,6.1389491,17z/data=!3m1!4b1!4m6!3m5!1s0x463c30ad33e11c3b:0x63caf8b387ddb66f!8m2!3d60.2506742!4d6.1389491!16s%2Fg%2F1td5_9g2!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D',
} as const;

export const program = [
    {
        time: '13:00',
        title: 'Ankomst',
        desc: 'Velkommen til Hardingasete',
        side: 'left',
    },
    {
        time: '14:00',
        title: 'Vielsen',
        desc: 'Seremoni i hageanlegget',
        side: 'right',
    },
    {
        time: '15:00',
        title: 'Champagneresepsjon',
        desc: 'Aperitiff og fotografering',
        side: 'left',
    },
    {
        time: '17:30',
        title: 'Middag',
        desc: 'Festmiddag i storstuen',
        side: 'right',
    },
    {
        time: '20:00',
        title: 'Taler & underholdning',
        desc: 'Minner og musikk',
        side: 'left',
    },
    {
        time: '21:30',
        title: 'Dans & fest',
        desc: 'Dansegulvet åpner',
        side: 'right',
    },
] as const;

export const infoCards: InfoCard[] = [
    {
        title: 'Sted',
        body: `${wedding.venue}\nTangevegen 131\n5620 ${wedding.city}`,
        link: { href: wedding.mapsUrl, label: 'Åpne i kart', icon: ExternalLinkElement, external: true },
    },
    {
        title: 'Overnatting',
        body: `Vi har reservert hele ${wedding.hotel.name}. `,
        link: { href: wedding.hotel.url, label: 'Se hotellet', icon: ExternalLinkElement, external: true },
    },
    {
        title: 'Transport',
        body: 'Shuttlebuss fra hotellet kl. 12:30 og 13:00. Taxi og parkering tilgjengelig ved ankomst.',
    },
    {
        title: 'Dresscode',
        body: 'Festantrekk. Unngå hvitt. Høyhælte sko anbefales ikke grunnet grussti.',
    },
    {
        title: 'Ønskeliste',
        body: 'Gavelisten finner dere under.',
        link:  { href: "/gaveliste", label: `Gaveliste`, icon: GiftElement, external: false },
    },
    {
        title: 'Taler',
        body: `Ønsker du å holde en tale? Kontakt toastmaster ${wedding.toastmaster.name} på ${wedding.toastmaster.email} senest XX`,
    },
] as const;
