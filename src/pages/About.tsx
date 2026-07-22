import { motion } from 'framer-motion'
import { Target, Eye, ShieldCheck } from 'lucide-react'
import { company } from '../constants/siteConfig'
import SectionHeading from '../components/ui/SectionHeading'

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="About Us"
        title="We are SPM Facility Services"
        subtitle="Your trusted partner for professional facility and maintenance services in Chengalpattu."
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center text-navy-light/90 leading-relaxed"
      >
        {company.name} is a full-service facility management company serving homes and
        businesses across Chengalpattu, Tamil Nadu. From electrical and plumbing works to
        housekeeping, deep cleaning, CCTV installation, general maintenance and security
        services, our trained and verified professionals deliver dependable results with
        transparent communication and a commitment to quality.
      </motion.p>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Target,
            title: 'Our Mission',
            text: 'Deliver quality service with trained professionals and transparent communication.',
          },
          {
            icon: Eye,
            title: 'Our Vision',
            text: 'Become the most trusted facility service company in Chengalpattu.',
          },
          {
            icon: ShieldCheck,
            title: 'Our Values',
            text: 'Reliability, professionalism and customer satisfaction in everything we do.',
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
              <card.icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-navy">{card.title}</h3>
            <p className="mt-2 text-sm text-navy-light/80 leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
