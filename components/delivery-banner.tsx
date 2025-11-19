"use client";

import { useTranslations } from "next-intl";

export default function DeliveryBanner() {
  const t = useTranslations("DeliveryBanner");

  return (
    <div className="bg-yellow-400 text-yellow-900 text-center py-2 px-4 font-bold text-xs md:text-sm shadow-sm">
      <p className="animate-pulse text-destructive">
        {t("message")}
      </p>
    </div>
  );
}
