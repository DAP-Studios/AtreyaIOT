import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/data';
import { SiteIcon } from '@/components/ui/SiteIcon';

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = SERVICES.find((item) => item.id === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-32">
      <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate">
        <Link href="/services" className="hover:text-blue">Services</Link>
        <SiteIcon token="arrow-right" className="h-4 w-4" />
        <span className="text-ink">{service.title}</span>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-4 border-l-2 border-cyan pl-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-cyan-dark">Service Overview</div>
          <h1 className="mb-6 font-display text-[clamp(2.4rem,6vw,5.2rem)] font-bold leading-[0.95] text-ink">{service.title}</h1>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-slate">{service.desc}</p>

          <div className="mb-10 flex flex-wrap gap-2">
            {service.applications.map((tag) => (
              <span key={tag} className="rounded-[6px] border border-cyan/20 bg-cyan/[0.06] px-3 py-1.5 text-[0.72rem] font-bold text-blue-deep">
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-8 rounded-[10px] border border-border bg-white p-6 shadow-brand-sm">
            <h2 className="mb-4 font-display text-[1.75rem] font-bold leading-none text-ink">What this service includes</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature.title} className="rounded-[8px] border border-border bg-snow p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[8px]" style={{ background: feature.bg }}>
                      <SiteIcon token={feature.icon} className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-bold text-ink">{feature.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[10px] border border-border bg-snow p-6">
            <h2 className="mb-4 font-display text-[1.6rem] font-bold leading-none text-ink">Deployment flow</h2>
            <ol className="space-y-3 text-sm leading-6 text-slate">
              <li className="flex gap-3"><strong className="text-blue">01</strong><span>Site survey and signal mapping to define data points and communication architecture.</span></li>
              <li className="flex gap-3"><strong className="text-blue">02</strong><span>Hardware integration with gateways/meters/sensors and secure telemetry onboarding.</span></li>
              <li className="flex gap-3"><strong className="text-blue">03</strong><span>Dashboard setup with alarms, trends, and role-based access for operations teams.</span></li>
              <li className="flex gap-3"><strong className="text-blue">04</strong><span>Go-live support, report automation, and continuous optimization reviews.</span></li>
            </ol>
          </div>
        </div>

        <div>
          <div className="sticky top-28 space-y-6">
            <div className="relative overflow-hidden rounded-[12px] border border-border bg-white shadow-brand-md">
              <div className="relative h-72">
                <Image
                  src={service.image}
                  alt={`${service.title} reference image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-[10px] border border-white/35 bg-white/20 p-3 backdrop-blur-sm">
                  <SiteIcon token={service.icon} className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-5">
                <div className="mb-2 text-[0.7rem] font-black uppercase tracking-[0.12em] text-cyan-dark">Reference Visual</div>
                <p className="text-sm leading-6 text-slate">Representative image for {service.title.toLowerCase()} deployment context.</p>
              </div>
            </div>

            <div className="rounded-[10px] border border-border bg-white p-5 shadow-brand-sm">
              <h3 className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-mist">Need Proposal?</h3>
              <p className="mb-4 text-sm leading-6 text-slate">Get a tailored scope covering instrumentation, communication, dashboard, and alerts.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-bold text-white">
                Contact Team
                <SiteIcon token="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 font-display text-[2rem] font-bold leading-none text-ink">Related Services</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {relatedServices.map((item) => (
            <Link key={item.id} href={`/services/${item.id}`} className="group overflow-hidden rounded-[10px] border border-border bg-white shadow-sm transition-shadow hover:shadow-brand-md">
              <div className="relative h-40">
                <Image src={item.image} alt={`${item.title} reference image`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-sm leading-6 text-slate">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
