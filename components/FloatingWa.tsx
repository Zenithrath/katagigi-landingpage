import { MessageCircle } from "lucide-react";
import { site } from "@/data/content";

export default function FloatingWa() {
  return (
    <a
      href={site.phoneHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp KataGigi"
      className="btn-shiny-emerald fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
      </span>
    </a>
  );
}
