import React from 'react';
import { SiteIcon } from '@/components/ui/SiteIcon';

export default function ServicesPage() {
  const services = [
    {
      title: "Process Instrumentation",
      desc: "Field-grade transmitters for the most measured industrial variables.",
      items: ["Pressure Transmitter (0-600 bar, 4-20mA, Modbus)", "Temperature Transmitter (RTD, Thermocouple, RS485)"]
    },
    {
      title: "Flow & Utility Metering",
      desc: "Electromagnetic, gas, and battery-operated flow measurement.",
      items: ["Electromagnetic Flow Meter", "Battery-Operated EM Flow Meter (5-yr battery)", "Gas Flow Meter (Thermal mass / vortex)"]
    },
    {
      title: "Energy Management",
      desc: "3-phase smart energy meters with built-in connectivity.",
      items: ["Wired RS485 Modbus", "WiFi 2.4 GHz", "SIM 4G/5G LTE", "Ethernet PoE"]
    },
    {
      title: "Industrial IoT Gateways",
      desc: "Connect any RS485 device to the cloud — wired or wireless.",
      items: ["RS485 to Ethernet Converter", "RS485 to WiFi Gateway", "RS485 to 4G/5G Gateway", "RS485 to Ethernet Gateway"]
    },
    {
      title: "I/O Modules & Gateways",
      desc: "DI/DO and AI/AO modules with built-in connectivity.",
      items: ["Digital I/O Modules (2 to 32 channel)", "Analog I/O Modules (2 to 32 channel)", "Protocol Converters (RS232/RS485 to USB)"]
    },
    {
      title: "Quality Monitoring Systems",
      desc: "CPCB-compliant continuous water & air quality monitoring.",
      items: ["Water Quality (TOC, COD, BOD, pH, TDS)", "Air Quality (SO2, NOx, SPM, CO2, VOC)"]
    },
    {
      title: "Utility & Compressor Monitoring",
      desc: "Water, Gas, Steam, N2 generation and consumption analytics.",
      items: ["Real-Time Flow Measurement", "Air / N2 Compressor Monitoring", "Chiller Compressor Monitoring"]
    },
    {
      title: "Asset Protection",
      desc: "Protection and monitoring for critical infrastructure.",
      items: ["Diesel Generator Monitoring", "Motor Protection Device", "Wireless Busbar Temperature Monitoring"]
    }
  ];

  return (
    <div className="pt-24 pb-20 max-w-[1320px] mx-auto px-5">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">Our <span className="text-blue">Solutions</span></h1>
        <p className="text-lg text-slate max-w-2xl mx-auto">
          Complete Industrial IoT & Process Monitoring Solutions — from field sensors to cloud SCADA.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white border border-border p-8 rounded-3xl shadow-sm hover:shadow-brand-md transition-shadow">
            <h3 className="text-xl font-bold text-ink mb-3">{service.title}</h3>
            <p className="text-sm text-slate mb-6 h-10">{service.desc}</p>
            <ul className="space-y-3">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
