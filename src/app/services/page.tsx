import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteIcon } from '@/components/ui/SiteIcon';
import { SERVICES } from '@/data';

export default function ServicesPage() {
  const services = SERVICES;

  return (
    <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-32">
      <div className="mb-16 max-w-3xl">
        <div className="mb-4 border-l-2 border-cyan pl-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-cyan-dark">Solutions</div>
        <h1 className="mb-6 font-display text-[clamp(3rem,7vw,6.8rem)] font-bold leading-[0.92] text-ink">Field to cloud, without the clutter.</h1>
        <p className="max-w-2xl text-lg leading-8 text-slate">
          Complete Industrial IoT and Process Monitoring Solutions - from field sensors to cloud SCADA, analytics, alerts, and management.
        </p>
      </div>

      <div className="mb-10 grid gap-4 rounded-[8px] border border-border bg-snow p-5 md:grid-cols-4">
        {['10 domain services', '500+ deployments', '24/7 live monitoring', 'multi-site analytics'].map((metric) => (
          <div key={metric} className="rounded-[8px] border border-border bg-white px-4 py-5">
            <div className="font-display text-[2rem] font-bold leading-none text-blue-deep">{metric.split(' ')[0]}</div>
            <div className="mt-2 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-slate">{metric.replace(metric.split(' ')[0], '').trim()}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, idx) => (
          <article key={service.title} className="flex min-h-full flex-col rounded-[8px] border border-border bg-white shadow-sm transition-shadow hover:shadow-brand-md">
            <div className="relative h-52 overflow-hidden border-b border-border">
              <Image
                src={service.image}
                alt={`${service.title} reference image`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
              <div className="absolute left-4 top-4 rounded-[10px] border border-white/35 bg-white/20 p-3 backdrop-blur-sm">
                <SiteIcon token={service.icon} className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 font-mono text-[0.72rem] font-bold text-cyan-dark">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="mb-3 font-display text-[1.55rem] font-bold leading-none text-ink">{service.title}</h3>
              <p className="mb-5 text-sm leading-6 text-slate">{service.desc}</p>

              <div className="mb-5 border-t border-border pt-5">
                <div className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.16em] text-mist">Highlights</div>
                <ul className="space-y-3">
                  {service.features.map((item) => (
                    <li key={item.title} className="flex items-start gap-2 text-sm font-medium leading-5 text-ink">
                      <SiteIcon token="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-dark" />
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {service.applications.map((app) => (
                  <span key={app} className="rounded-[6px] border border-cyan/20 bg-cyan/[0.06] px-2.5 py-1 text-[0.68rem] font-bold text-blue-deep">
                    {app}
                  </span>
                ))}
              </div>

              <Link
                href={`/services/${service.id}`}
                className="mt-6 inline-flex items-center gap-2 text-[0.8rem] font-bold text-blue hover:text-cyan-dark"
              >
                View Full Service
                <SiteIcon token="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
