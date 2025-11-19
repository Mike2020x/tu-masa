import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-orange-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100">
              <span className="animate-pulse">✨</span>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase">Premium Quality</p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] text-gray-900 tracking-tight">
              {t("title").split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              {t("subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#products"
                className="group bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t("cta")}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white h-[600px]">
              <Image
                src="/hero.jpg"
                alt="Masas frescas"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          </div>
        </div>
      </div>
    </section>
  );
}
