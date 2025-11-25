import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhatsAppButton() {
  const t = useTranslations("WhatsApp");
  
  return (
    <a
      href="https://wa.me/+573004447056"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 animate-bounce"
      aria-label={t("label")}
    >
      <MessageCircle size={28} />
    </a>
  );
}
