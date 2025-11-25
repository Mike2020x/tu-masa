"use client";

import { useTranslations } from "next-intl";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Products() {
  const t = useTranslations("Products");

  const products = [
    {
      id: 1,
      name: t("pandeyuca"),
      description: t("pandeyucaDesc"),
      price: "$20.000",
      image: "/pizza-dough-fresh-bakery.jpg",
      tag: t("bestSeller"),
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: 2,
      name: t("bunuelos"),
      description: t("bunuelosDesc"),
      price: "$15.000",
      image: "/fresh-baked-pastries-bread-dough.jpg",
      tag: t("premium"),
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 3,
      name: t("pandebono"),
      description: t("pandebonoDesc"),
      price: "$20.000",
      image: "/bread-dough-white-flour.jpg",
      tag: t("classic"),
      color: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <section
      id="products"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-primary font-bold tracking-wider uppercase text-sm">
            {t("title")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            {t("subtitle")}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide z-20 backdrop-blur-md bg-white/90 ${product.color}`}>
                  {product.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase font-semibold">Precio</span>
                    <span className="text-3xl font-black text-gray-900">
                      {product.price}
                    </span>
                  </div>
                  <a
                    href="https://wa.me/+573004447056"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary transition-colors flex items-center gap-2 shadow-lg shadow-gray-900/20 hover:shadow-primary/30"
                  >
                    <ShoppingBag size={18} />
                    {t("order")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
