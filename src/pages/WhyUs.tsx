import { motion } from 'framer-motion'
import { reasons } from '../constants/siteConfig'
import { iconMap } from '../components/ui/iconMap'
import SectionHeading from '../components/ui/SectionHeading'

export default function WhyUs() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Why SPM"
        title="Why Choose Us"
        subtitle="We go the extra mile to make facility management effortless for you."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => {
          const Icon = iconMap[r.icon]
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                {Icon && <Icon size={30} />}
              </div>
              <h3 className="text-lg font-semibold text-navy">{r.title}</h3>
              <p className="mt-2 text-sm text-navy-light/80 leading-relaxed">{r.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
