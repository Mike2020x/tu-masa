"use client";

import { Leaf, Clock, Heart, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations("Benefits");

  const benefits = [
    {
      icon: Leaf,
      title: t("fresh"),
      description: t("freshDesc"),
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Clock,
      title: t("easy"),
      description: t("easyDesc"),
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Heart,
      title: t("love"),
      description: t("loveDesc"),
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: t("delivery"),
      description: t("deliveryDesc"),
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-6">
            {t("title")}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-[2rem] shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-20 h-20 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
