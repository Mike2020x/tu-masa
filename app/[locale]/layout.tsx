import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MasaFresh - Masa Lista para Hornear",
  description: "Masas frescas y deliciosas listas para hornear. Pizzas, panes, croissants, galletas y más. Entrega a domicilio.",
};

import DeliveryBanner from "@/components/delivery-banner";
import Navbar from "@/components/navbar";


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="fixed top-0 w-full z-50 flex flex-col">
            <DeliveryBanner />
            <Navbar />
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
