import { Phone, Mail, MapPin, MessageCircle, MapPinned } from 'lucide-react'
import { company, defaultWhatsapp, serviceAreas, faqs } from '../constants/siteConfig'
import SectionHeading from '../components/ui/SectionHeading'

export default function Contact() {
  const contactItems = [
    { icon: Phone, label: 'Phone', value: company.phone, href: company.telLink },
    { icon: Mail, label: 'Email', value: company.email, href: company.emailLink },
    { icon: MapPin, label: 'Location', value: company.location, href: undefined },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Call or message us — we respond quickly. No forms, no waiting."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Info + big CTAs */}
        <div>
          <div className="space-y-4">
            {contactItems.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <c.icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="font-medium text-navy hover:text-brand-green">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-medium text-navy">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Need a service — big buttons */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <h3 className="text-lg font-bold text-navy">Need a Service?</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={company.telLink}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-orange-600"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href={defaultWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-green-600"
              >
                <MessageCircle size={20} />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>

        {/* Service areas + map */}
        <div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <MapPinned size={20} className="text-brand-green" />
              <h3 className="text-lg font-semibold text-navy">Areas We Serve</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-navy"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="SPM Facility Services Location"
              src="https://www.google.com/maps?q=Chengalpattu,Tamil+Nadu&z=12&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked Questions"
          subtitle="Quick answers to what customers usually ask us."
        />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy">
                {f.question}
                <span className="ml-4 text-brand-green transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
