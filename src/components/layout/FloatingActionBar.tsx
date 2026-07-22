import { Phone, MessageCircle } from 'lucide-react'
import { company, defaultWhatsapp } from '../../constants/siteConfig'

export default function FloatingActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden">
      <a
        href={company.telLink}
        className="flex flex-1 items-center justify-center gap-2 bg-navy py-3.5 text-sm font-semibold text-white"
      >
        <Phone size={18} />
        Call Now
      </a>
      <a
        href={defaultWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-brand-green py-3.5 text-sm font-semibold text-white"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  )
}
