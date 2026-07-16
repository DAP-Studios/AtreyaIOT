import React from 'react';
import Image from 'next/image';
import { SiteIcon } from '@/components/ui/SiteIcon';
import aboutImage from '@/assets/profile/cms-dashboard.png';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-32">
      <div className="mb-16 max-w-3xl">
        <div className="mb-4 border-l-2 border-cyan pl-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-cyan-dark">About Atreya</div>
        <h1 className="mb-6 font-display text-[clamp(3rem,7vw,6.8rem)] font-bold leading-[0.92] text-ink">Industrial automation, made sharper.</h1>
        <p className="max-w-2xl text-lg leading-8 text-slate">
          Atreya builds industrial monitoring systems that turn field signals into decisions. We help plants, utilities, and facility teams monitor assets, reduce downtime, and improve energy performance with practical, deployable IoT systems.
        </p>
      </div>

      <div className="mb-20 grid items-start gap-12 md:grid-cols-[1fr_0.85fr]">
        <div>
          <h2 className="mb-6 max-w-xl font-display text-[clamp(2rem,4vw,3.6rem)] font-bold leading-none text-ink">Product and technology company for connected industry.</h2>
          <p className="text-slate mb-4 leading-relaxed">
            We design, manufacture, and deploy smart instrumentation, gateways, meters, dashboards, and monitoring services that connect the plant floor to the decision layer.
          </p>
          <p className="text-slate leading-relaxed mb-6">
            Our portfolio spans the full IIoT stack, from field-grade sensors and transmitters through Modbus, 4G, and WiFi gateways to cloud-ready dashboards, alarms, reporting, and analytics.
          </p>
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[8px] border border-border bg-white p-5 shadow-brand-sm">
              <div className="mb-2 text-[0.7rem] font-black uppercase tracking-[0.14em] text-cyan-dark">What we deliver</div>
              <p className="text-sm leading-6 text-slate">Monitoring systems, instrumentation packages, operational dashboards, and support services tailored to each site.</p>
            </div>
            <div className="rounded-[8px] border border-border bg-white p-5 shadow-brand-sm">
              <div className="mb-2 text-[0.7rem] font-black uppercase tracking-[0.14em] text-cyan-dark">How we work</div>
              <p className="text-sm leading-6 text-slate">We assess the process, define the data points, deploy the stack, and stay involved through go-live and optimization.</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-[8px] border border-border bg-white p-6 shadow-brand-sm">
              <div className="text-4xl font-bold text-blue mb-2">100%</div>
              <div className="text-sm font-semibold text-ink">In-House R&D</div>
            </div>
            <div className="rounded-[8px] border border-border bg-white p-6 shadow-brand-sm">
              <div className="text-4xl font-bold text-blue mb-2">ISO</div>
              <div className="text-sm font-semibold text-ink">Certified Quality</div>
            </div>
            <div className="rounded-[8px] border border-border bg-white p-6 shadow-brand-sm">
              <div className="text-4xl font-bold text-blue mb-2">CPCB</div>
              <div className="text-sm font-semibold text-ink">Compliant</div>
            </div>
            <div className="rounded-[8px] border border-border bg-white p-6 shadow-brand-sm">
              <div className="text-4xl font-bold text-blue mb-2">INDIA</div>
              <div className="text-sm font-semibold text-ink">Made in India</div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-[8px] border border-border bg-white shadow-brand-lg">
            <div className="relative h-72">
              <Image src={aboutImage} alt="Atreya monitoring dashboard reference" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
              <div className="absolute left-4 top-4 rounded-[10px] border border-white/35 bg-white/20 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                Real-time systems view
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-white p-5 text-center">
                <div className="text-3xl font-black text-blue-deep">500+</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate">Plants served</div>
              </div>
              <div className="bg-white p-5 text-center">
                <div className="text-3xl font-black text-blue-deep">10k+</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate">Devices deployed</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex h-36 flex-col items-center justify-center rounded-[8px] bg-blue-deep p-6 text-center text-white shadow-brand-lg">
              <span className="text-3xl font-black mb-1">24/7</span>
              <span className="text-sm font-medium opacity-90">Monitoring support</span>
            </div>
            <div className="flex h-36 flex-col items-center justify-center rounded-[8px] border border-border bg-white p-6 text-center text-ink shadow-sm">
              <span className="text-3xl font-black text-blue mb-1">15+</span>
              <span className="text-sm font-medium text-slate">Industries covered</span>
            </div>
            <div className="flex h-36 flex-col items-center justify-center rounded-[8px] border border-border bg-white p-6 text-center text-ink shadow-sm">
              <span className="text-3xl font-black text-blue mb-1">Real</span>
              <span className="text-sm font-medium text-slate">Operational impact</span>
            </div>
            <div className="flex h-36 flex-col items-center justify-center rounded-[8px] bg-cyan-dark p-6 text-center text-white shadow-brand-lg">
              <span className="text-3xl font-black mb-1">Fast</span>
              <span className="text-sm font-medium opacity-90">Implementation cycles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
