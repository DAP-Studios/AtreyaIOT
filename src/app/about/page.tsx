import React from 'react';
import { SiteIcon } from '@/components/ui/SiteIcon';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-32">
      <div className="mb-16 max-w-3xl">
        <div className="mb-4 border-l-2 border-cyan pl-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-cyan-dark">About Atreya</div>
        <h1 className="mb-6 font-display text-[clamp(3rem,7vw,6.8rem)] font-bold leading-[0.92] text-ink">Industrial automation, made sharper.</h1>
        <p className="max-w-2xl text-lg leading-8 text-slate">
          Atreya is a product engineering and technology company in the field of industrial automation, IoT and process monitoring.
        </p>
      </div>

      <div className="mb-20 grid items-start gap-12 md:grid-cols-[1fr_0.85fr]">
        <div>
          <h2 className="mb-6 max-w-xl font-display text-[clamp(2rem,4vw,3.6rem)] font-bold leading-none text-ink">Product and technology company for connected industry.</h2>
          <p className="text-slate mb-4 leading-relaxed">
            We design, manufacture and deploy smart instrumentation, gateways, energy meters and centralized management software that help industries digitize their operations, reduce losses and improve uptime.
          </p>
          <p className="text-slate leading-relaxed mb-6">
            Our portfolio spans the full IIoT stack — from field-grade sensors and transmitters, through Modbus / 4G / WiFi gateways and DIN-rail I/O modules, to a cloud SCADA platform with real-time dashboards, alerts and analytics.
          </p>
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
        <div className="grid grid-cols-2 gap-4">
          <div className="flex h-48 flex-col items-center justify-center rounded-[8px] bg-blue-deep p-8 text-center text-white shadow-brand-lg">
            <span className="text-4xl font-black mb-2">500+</span>
            <span className="text-sm font-medium opacity-90">Industries Served</span>
          </div>
          <div className="flex h-48 flex-col items-center justify-center rounded-[8px] border border-border bg-white p-8 text-center text-ink shadow-sm">
            <span className="text-4xl font-black text-blue mb-2">10k+</span>
            <span className="text-sm font-medium text-slate">Devices Deployed</span>
          </div>
          <div className="flex h-48 flex-col items-center justify-center rounded-[8px] border border-border bg-white p-8 text-center text-ink shadow-sm">
            <span className="text-4xl font-black text-blue mb-2">200+</span>
            <span className="text-sm font-medium text-slate">Plants Online</span>
          </div>
          <div className="flex h-48 flex-col items-center justify-center rounded-[8px] bg-cyan-dark p-8 text-center text-white shadow-brand-lg">
            <span className="text-4xl font-black mb-2">15+</span>
            <span className="text-sm font-medium opacity-90">Countries</span>
          </div>
        </div>
      </div>
    </div>
  );
}
