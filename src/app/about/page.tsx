import React from 'react';
import { SiteIcon } from '@/components/ui/SiteIcon';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 max-w-[1320px] mx-auto px-5">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">About <span className="text-blue">Atreya</span></h1>
        <p className="text-lg text-slate max-w-2xl mx-auto">
          Atreya is a product engineering and technology company in the field of industrial automation, IoT and process monitoring.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-ink mb-6">Product & technology company in industrial automation</h2>
          <p className="text-slate mb-4 leading-relaxed">
            We design, manufacture and deploy smart instrumentation, gateways, energy meters and centralized management software that help industries digitize their operations, reduce losses and improve uptime.
          </p>
          <p className="text-slate leading-relaxed mb-6">
            Our portfolio spans the full IIoT stack — from field-grade sensors and transmitters, through Modbus / 4G / WiFi gateways and DIN-rail I/O modules, to a cloud SCADA platform with real-time dashboards, alerts and analytics.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-cool p-6 rounded-2xl border border-border">
              <div className="text-4xl font-bold text-blue mb-2">100%</div>
              <div className="text-sm font-semibold text-ink">In-House R&D</div>
            </div>
            <div className="bg-cool p-6 rounded-2xl border border-border">
              <div className="text-4xl font-bold text-blue mb-2">ISO</div>
              <div className="text-sm font-semibold text-ink">Certified Quality</div>
            </div>
            <div className="bg-cool p-6 rounded-2xl border border-border">
              <div className="text-4xl font-bold text-blue mb-2">CPCB</div>
              <div className="text-sm font-semibold text-ink">Compliant</div>
            </div>
            <div className="bg-cool p-6 rounded-2xl border border-border">
              <div className="text-4xl font-bold text-blue mb-2">INDIA</div>
              <div className="text-sm font-semibold text-ink">Made in India</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-primary p-8 rounded-3xl text-white text-center flex flex-col justify-center items-center h-48 shadow-brand-lg">
            <span className="text-4xl font-black mb-2">500+</span>
            <span className="text-sm font-medium opacity-90">Industries Served</span>
          </div>
          <div className="bg-white border border-border p-8 rounded-3xl text-ink text-center flex flex-col justify-center items-center h-48 shadow-sm">
            <span className="text-4xl font-black text-blue mb-2">10k+</span>
            <span className="text-sm font-medium text-slate">Devices Deployed</span>
          </div>
          <div className="bg-white border border-border p-8 rounded-3xl text-ink text-center flex flex-col justify-center items-center h-48 shadow-sm">
            <span className="text-4xl font-black text-blue mb-2">200+</span>
            <span className="text-sm font-medium text-slate">Plants Online</span>
          </div>
          <div className="bg-gradient-secondary p-8 rounded-3xl text-white text-center flex flex-col justify-center items-center h-48 shadow-brand-lg">
            <span className="text-4xl font-black mb-2">15+</span>
            <span className="text-sm font-medium opacity-90">Countries</span>
          </div>
        </div>
      </div>
    </div>
  );
}
