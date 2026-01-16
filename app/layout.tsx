import type { Metadata } from 'next'
import { Poppins, Fredoka } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

const fredoka = Fredoka({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-fredoka',
})

export const metadata: Metadata = {
    title: "Bella's Candy Shop | Sweet Treats for Sweet Moments",
    description: "Discover colorful candies and delicious treats with next-day delivery in Nairobi. Premium wafers, chocolates, and artisan snacks delivered to your door.",
    keywords: "candy shop, Nairobi, delivery, wafers, chocolates, sweet treats, Kenya",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${poppins.variable} ${fredoka.variable}`}>
            <body>{children}</body>
        </html>
    )
}
