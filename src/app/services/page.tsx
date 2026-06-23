import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { SiteIcon } from '@/components/ui/SiteIcon';
import cmsDashboard from '@/assets/profile/cms-dashboard.png';
import pressureTransmitter from '@/assets/profile/pressure-transmitter.png';
import flowMeter from '@/assets/profile/flow-meter.png';
import energyMeter from '@/assets/profile/energy-meter.png';
import iotGateway from '@/assets/profile/iot-gateway.png';
import ioModule from '@/assets/profile/io-module.png';
import scanner from '@/assets/profile/scanner.png';
import busbarSensor from '@/assets/profile/busbar-sensor.png';

type Service = {
  title: string;
  desc: string;
  image: StaticImageData;
  specs: string[];
  applications: string[];
};

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: 'Process Instrumentation',
      desc: 'Field-grade pressure and temperature transmitters for reliable plant measurement.',
      image: pressureTransmitter,
      specs: ['Pressure range: 0-600 bar', 'Output: 4-20 mA, 0-10 VDC, Modbus RTU', 'Accuracy up to +/-0.1% smart variant', 'IP65/IP67 stainless housing'],
      applications: ['Pressure', 'Temperature', 'Flow', 'Level', 'Run Hours'],
    },
    {
      title: 'Flow & Utility Metering',
      desc: 'Electromagnetic, gas, and battery-operated metering for water, gas, steam, and nitrogen.',
      image: flowMeter,
      specs: ['DN15-DN1000 electromagnetic flow meters', 'Battery EM option with 5-year battery life', 'Modbus RTU, pulse, and 4-20 mA outputs', 'IP68 sensor options for harsh sites'],
      applications: ['Water', 'Gas', 'Steam', 'Nitrogen', 'ETP'],
    },
    {
      title: 'Energy Management',
      desc: '3-phase smart energy meters with built-in connectivity for EMS and billing workflows.',
      image: energyMeter,
      specs: ['Class 1 / 0.5S accuracy', '3-phase 4-wire metering', 'kWh, kVAh, kVArh, PF, harmonics', 'RS485, WiFi, 4G/5G SIM, and Ethernet PoE variants'],
      applications: ['EMS', 'Billing', 'SCADA', 'Power Quality', 'Plant Load'],
    },
    {
      title: 'Industrial IoT Gateways',
      desc: 'Connect any RS485 device to cloud systems over wired or wireless networks.',
      image: iotGateway,
      specs: ['RS485 to Ethernet, WiFi, and 4G/5G', 'Slave-ID capacity: 2 / 4 / 16 / 32', 'Modbus RTU/TCP, MQTT, REST, FTP', '2-3 months internal storage with OTA updates'],
      applications: ['Remote Sites', 'Cloud SCADA', 'Retrofit', 'MQTT', 'Modbus'],
    },
    {
      title: 'I/O Modules & Gateways',
      desc: 'DI/DO and AI/AO modules with built-in connectivity for direct SCADA integration.',
      image: ioModule,
      specs: ['2, 4, 8, 16, and 32-channel options', 'Digital ON/OFF/TRIP status sensing', 'Analog 0-10 V, 4-20 mA, 0-5 V, +/-10 V', 'RS485, Ethernet, WiFi, and 4G/5G options'],
      applications: ['Breakers', 'Contactors', 'Alarms', 'Analog Signals', 'PLC'],
    },
    {
      title: 'Temperature & Scanner Systems',
      desc: 'Indicators, PID controllers, and multi-channel scanners for thermal process monitoring.',
      image: scanner,
      specs: ['Universal input: RTD, TC, mA, V', '4, 8, 16, and 24-channel scanners', 'Scan rate: 1 second per channel', 'Trend display, data logging, alarms, RS485 Modbus'],
      applications: ['Temperature', 'PID Control', 'Data Logging', 'Alerts', 'Panels'],
    },
    {
      title: 'Central Management System',
      desc: 'One platform for plant dashboards, trends, alerts, reports, and remote management.',
      image: cmsDashboard,
      specs: ['Live dashboard and trends', 'Alerts, alarms, and compliance reports', 'Multi-plant view with role-based access', 'Cloud and on-premise deployment options'],
      applications: ['Analytics', 'Mobile App', 'Reports', 'ERP/SAP', 'Remote Ops'],
    },
    {
      title: 'Asset Protection',
      desc: 'Protection and monitoring for DG sets, motors, busbars, and electrical panels.',
      image: busbarSensor,
      specs: ['DG monitoring for temperature, pressure, RPM, fuel, vibration', 'Motor protection: overload, phase failure, earth fault', 'Wireless busbar temperature and humidity sensor', 'SMS/email alerts and daily usage reports'],
      applications: ['DG Sets', 'Motors', 'Busbars', 'Panels', 'Fire Prevention'],
    },
  ];

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
        {['500+ industries served', '10k+ devices deployed', '200+ plants online', '15+ countries'].map((metric) => (
          <div key={metric} className="rounded-[8px] border border-border bg-white px-4 py-5">
            <div className="font-display text-[2rem] font-bold leading-none text-blue-deep">{metric.split(' ')[0]}</div>
            <div className="mt-2 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-slate">{metric.replace(metric.split(' ')[0], '').trim()}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, idx) => (
          <article key={service.title} className="flex min-h-full flex-col rounded-[8px] border border-border bg-white shadow-sm transition-shadow hover:shadow-brand-md">
            <div className="flex h-52 items-center justify-center border-b border-border bg-[#05080f] p-5">
              <Image src={service.image} alt={`${service.title} product visual`} className="max-h-full w-auto object-contain" sizes="(max-width: 768px) 100vw, 25vw" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 font-mono text-[0.72rem] font-bold text-cyan-dark">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="mb-3 font-display text-[1.55rem] font-bold leading-none text-ink">{service.title}</h3>
              <p className="mb-5 text-sm leading-6 text-slate">{service.desc}</p>

              <div className="mb-5 border-t border-border pt-5">
                <div className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.16em] text-mist">Key Specs</div>
                <ul className="space-y-3">
                  {service.specs.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-medium leading-5 text-ink">
                      <SiteIcon token="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-dark" />
                      {item}
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
