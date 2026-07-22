import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { iconMap } from './iconMap'
import { whatsappLink, type ServiceItem } from '../../constants/siteConfig'
import { images } from '../../assets/images'

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = iconMap[service.icon]
  const link = whatsappLink(`Hi SPM Facility, I need ${service.name} service.`)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={images[service.image]}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-green shadow-md ring-1 ring-black/5">
          {Icon && <Icon size={22} strokeWidth={2.2} />}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-navy sm:text-lg">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {service.description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600"
        >
          <MessageCircle size={16} />
          Enquire on WhatsApp
        </a>
      </div>
    </motion.div>
  )
}
