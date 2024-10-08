export const LINKS = [
    { title: 'Services', href: '#services', key: 'services' },
    { title: 'Licenses', href: '#licenses', key: 'licenses' },
    { title: 'How it works', href: '#how-it-works', key: 'how-it-works' },
    { title: 'Cases', href: '#cases', key: 'cases' },
    { title: 'Reviews', href: '#reviews', key: 'reviews' },
    { title: 'FAQ', href: '#FAQ', key: 'faq' },
]
export const LINKS_SCHOOL = [
    {
        title: 'Who is the course for',
        href: '#who-is-the-course-for',
        key: 'who-is-the-course-for',
    },
    { title: 'Knowledge base', href: '#knowledge-base', key: 'knowledge-base' },
    { title: 'About course', href: '#about-course', key: 'about-course' },
    { title: 'Teacher', href: '#teacher', key: 'teacher' },
    { title: 'Cases', href: '#cases', key: 'cases' },
    { title: 'Cost', href: '#cost', key: 'cost' },
    { title: 'Request', href: '#request', key: 'request' },
    { title: 'FAQ', href: '#FAQ', key: 'faq' },
    { title: 'Contact us', href: '#contact-us', key: 'contact-us' },
]
export const LOCALES = [
    { language: 'English', iso: 'en' },
    { language: 'Spanish', iso: 'es' },
]

export interface StrapiImage {
    width?: number
    height?: number
    url?: string
}

export interface IAccordion {
    title: string
    description: string
    image: StrapiImage
}
// export const ACCORDION_MAIN = [
//     {
//         number: '01',
//         title: "Broker's license",
//         description: 'An economical and popular option for transporting standard vehicles, pickup trucks',
//         image: '/accordion/letter.webp'
//     },
//     {
//         number: '02',
//         title: "Insurance",
//         description: 'An economical and popular option for transporting standard vehicles, pickup trucks',
//         image: '/accordion/letter.webp'
//     },
// ]

import case1 from '@/images/case1.webp'
import case2 from '@/images/case2.webp'
export interface ICase {
    image: StrapiImage
    title?: string
    description?: string
    caseItem?: ICaseItem
}
export interface ICaseItem {
    name: string
    text: string
    photos?: StrapiImage[]
}
export const CASES = [
    {
        image: case1,
        title: 'Delivery on enclosed trailers',
        description:
            'Lorem ipsum dolor sit amet consectetur. A donec at consequat faucibus nisl quis suspendisse. Scelerisque lectus neque ac hendrerit feugiat gravida at posuere. Ut et eu ut morbi. Vitae quis sed pharetra mi.',
        caseItem: {
            name: 'Case name',
            text: 'Lorem ipsum dolor sit amet consectetur. Non facilisis amet et rutrum tincidunt nullam aliquam integer condimentum. Nulla egestas a id non. Quam arcu rhoncus enim aliquam. Convallis elit eget nunc nulla posuere sed.',
            photos: [case1, case2],
        },
    },
    {
        image: case1,
        title: 'Delivery on enclosed trailers',
        description:
            'Lorem ipsum dolor sit amet consectetur. A donec at consequat faucibus nisl quis suspendisse. Scelerisque lectus neque ac hendrerit feugiat gravida at posuere. Ut et eu ut morbi. Vitae quis sed pharetra mi.',
        caseItem: {
            name: 'Case name',
            text: 'Lorem ipsum dolor sit amet consectetur. Non facilisis amet et rutrum tincidunt nullam aliquam integer condimentum. Nulla egestas a id non. Quam arcu rhoncus enim aliquam. Convallis elit eget nunc nulla posuere sed.',
            photos: [case1, case2],
        },
    },
    {
        image: case1,
        title: 'Delivery on enclosed trailers',
        description:
            'Lorem ipsum dolor sit amet consectetur. A donec at consequat faucibus nisl quis suspendisse. Scelerisque lectus neque ac hendrerit feugiat gravida at posuere. Ut et eu ut morbi. Vitae quis sed pharetra mi.',
        caseItem: {
            name: 'Case name',
            text: 'Lorem ipsum dolor sit amet consectetur. Non facilisis amet et rutrum tincidunt nullam aliquam integer condimentum. Nulla egestas a id non. Quam arcu rhoncus enim aliquam. Convallis elit eget nunc nulla posuere sed.',
            photos: [case1, case2],
        },
    },
]
import photo1 from '@/images/cases-photo1.webp'
import photo2 from '@/images/cases-photo2.webp'
import { StaticImageData } from 'next/image'
export const PHOTOS = [
    { image: photo1 },
    { image: photo2 },
    { image: photo1 },
    { image: photo2 },
]
export const REVIEWS = [
    {
        image: '/reviews/review1.png',
        name: 'Halley Burn',
        review: 'Lorem ipsum dolor sit amet consectetur. A donec at consequat faucibus nisl quis suspendisse. Scelerisque lectus neque ac hendrerit feugiat gravida at posuere. Ut et eu ut morbi.',
        rating: 4,
        date: '12 September, 2023',
    },
    {
        image: '/reviews/review2.png',
        name: 'Halley Burn',
        review: 'Lorem ipsum dolor sit amet consectetur. A donec at consequat faucibus nisl quis suspendisse. Scelerisque lectus neque ac hendrerit feugiat gravida at posuere. Ut et eu ut morbi.',
        rating: 4,
        date: '24 April, 2023',
    },
    {
        image: '/reviews/review3.png',
        name: 'Gilan Mortey',
        review: 'Lorem ipsum dolor sit amet consectetur. A donec at consequat faucibus nisl quis suspendisse. Scelerisque lectus neque ac hendrerit feugiat gravida at posuere. Ut et eu ut morbi.',
        rating: 4,
        date: '24 April, 2023',
    },
    {
        image: '/reviews/review1.png',
        name: 'Halley Burn',
        review: 'Lorem ipsum dolor sit amet consectetur. A donec at consequat faucibus nisl quis suspendisse. Scelerisque lectus neque ac hendrerit feugiat gravida at posuere. Ut et eu ut morbi.',
        rating: 3,
        date: '12 September, 2023',
    },
    {
        image: '/reviews/review2.png',
        name: 'Halley Burn',
        review: 'Lorem ipsum dolor sit amet consectetur. A donec at consequat faucibus nisl quis suspendisse. Scelerisque lectus neque ac hendrerit feugiat gravida at posuere. Ut et eu ut morbi.',
        rating: 3,
        date: '24 April, 2023',
    },
    {
        image: '/reviews/review3.png',
        name: 'Gilan Mortey',
        review: 'Lorem ipsum dolor sit amet consectetur. A donec at consequat faucibus nisl quis suspendisse. Scelerisque lectus neque ac hendrerit feugiat gravida at posuere. Ut et eu ut morbi.',
        rating: 3,
        date: '24 April, 2023',
    },
]

export const ACCORDION_SCHOOL = [
    {
        number: '01',
        title: '1st module. truck & trailer',
        description:
            'Pickup trucks. everything you need to know. Types of trailers and their equipment. Trailer devices. Rubber, pressure, wear. Attaching the trailer. Documents with you. Log book, daily routine. Equipment with you on the road. Spare parts and tools with you. Forms of payment, cashless, factoring, checks, cash.',
        image: '/accordion/truck.webp',
    },
    {
        number: '02',
        title: '2nd module. Voyage service',
        description:
            'Pickup trucks. everything you need to know. Types of trailers and their equipment. Trailer devices. Rubber, pressure, wear. Attaching the trailer. Documents with you. Log book, daily routine. Equipment with you on the road. Spare parts and tools with you. Forms of payment, cashless, factoring, checks, cash.',
        image: '/accordion/truck.webp',
    },
    {
        number: '03',
        title: '3rd module. movement',
        description:
            'Pickup trucks. everything you need to know. Types of trailers and their equipment. Trailer devices. Rubber, pressure, wear. Attaching the trailer. Documents with you. Log book, daily routine. Equipment with you on the road. Spare parts and tools with you. Forms of payment, cashless, factoring, checks, cash.',
        image: '/accordion/truck.webp',
    },
    {
        number: '04',
        title: '4th module. car and motorcycle transportation',
        description:
            'Pickup trucks. everything you need to know. Types of trailers and their equipment. Trailer devices. Rubber, pressure, wear. Attaching the trailer. Documents with you. Log book, daily routine. Equipment with you on the road. Spare parts and tools with you. Forms of payment, cashless, factoring, checks, cash.',
        image: '/accordion/truck.webp',
    },
    {
        number: '05',
        title: '5th module. Formation of practical skills',
        description:
            'Pickup trucks. everything you need to know. Types of trailers and their equipment. Trailer devices. Rubber, pressure, wear. Attaching the trailer. Documents with you. Log book, daily routine. Equipment with you on the road. Spare parts and tools with you. Forms of payment, cashless, factoring, checks, cash.',
        image: '/accordion/truck.webp',
    },
]
