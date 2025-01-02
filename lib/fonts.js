// fonts.js
import {
    Domine,
    Martel,
    Merriweather,
    Philosopher,
    Trirong,
    Volkhov
} from 'next/font/google'

export const domine = Domine({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-domine',
})

export const martel = Martel({
    weight: ['200', '300', '400', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-martel',
})

export const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-merriweather',
})

export const philosopher = Philosopher({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-philosopher',
})

export const trirong = Trirong({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-trirong',
})

export const volkhov = Volkhov({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-volkhov',
})