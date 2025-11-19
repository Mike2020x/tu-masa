"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            {t("subtitle")}
          </p>
          
          <a
            href="https://wa.me/+573226284727"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
