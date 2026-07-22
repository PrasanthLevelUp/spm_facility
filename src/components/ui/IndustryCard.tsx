import { motion } from 'framer-motion'
import { iconMap } from './iconMap'
import { type IndustryItem } from '../../constants/siteConfig'

export default function IndustryCard({ industry }: { industry: IndustryItem }) {
  const Icon = iconMap[industry.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="bg-navy px-5 py-3">
        <h3 className="text-sm font-semibold text-white">{industry.name}</h3>
      </div>
      <div className="flex items-center justify-center p-8">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${industry.color} text-white shadow-md`}
        >
          {Icon && <Icon size={30} strokeWidth={2} />}
        </div>
      </div>
    </motion.div>
  )
}
