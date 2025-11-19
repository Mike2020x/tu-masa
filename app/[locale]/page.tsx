"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Benefits from "@/components/benefits";
import Contact from "@/components/contact";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
