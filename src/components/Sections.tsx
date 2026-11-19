import { services, steps, projects, faqs } from "@/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Services = () => (
  <section id="services" className="py-24 sm:py-32 bg-card">
    <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h2 className="h2">What we do</h2>
        <p className="lede mt-5">
          AI and digital solutions from one team: from an AI assistant or a website to the system that runs your company,
          plus the domain and hosting it lives on.
        </p>
      </div>
      <ul className="border-t border-foreground">
        {services.map((s) => (
          <li key={s.title} className="grid gap-2 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-10 py-8 border-b border-border">
            <h3 className="font-display text-2xl sm:text-[1.75rem] font-bold leading-tight">{s.title}</h3>
            <p className="text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Fact = ({ label, value }: { label: string; value: string }) => (
  <div>
    <dt className="text-sm text-muted-foreground">{label}</dt>
    <dd className="mt-1 font-semibold">{value}</dd>
  </div>
);

export const Work = () => (
  <section id="work" className="py-24 sm:py-32">
    <div className="wrap">
      <h2 className="h2 max-w-3xl">Software that is already doing its job</h2>
      <p className="lede mt-5">Real screens from projects we built, as they look today.</p>

      <div className="mt-20 space-y-28 sm:space-y-36">
        {projects.map((p, n) => {
          const flip = n % 2 === 1;
          return (
            <article key={p.id} className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className={`lg:col-span-7 relative pb-10 sm:pb-16 ${flip ? "lg:order-2" : ""}`}>
                <div className="frame sm:w-[90%]">
                  <div className="frame-bar">
                    <span className="frame-dot" />
                    <span className="frame-dot" />
                    <span className="frame-dot" />
                  </div>
                  <img src={p.main.src} alt={p.main.alt} loading="lazy" width={1200} height={750} className="block w-full h-auto" />
                </div>
                <div className={`frame hidden sm:block absolute bottom-0 w-[50%] ${flip ? "left-0 sm:left-auto sm:right-0" : "right-0"}`}>
                  <img src={p.second.src} alt={p.second.alt} loading="lazy" width={1200} height={750} className="block w-full h-auto" />
                </div>
              </div>

              <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:pr-6" : "lg:pl-6"}`}>
                <h3 className="font-display text-4xl sm:text-5xl font-extrabold leading-none">{p.name}</h3>
                <p className="mt-6 text-lg text-foreground/80 leading-relaxed">{p.summary}</p>
                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6">
                  <Fact label="Client" value={p.client} />
                  <Fact label="Status" value={p.status} />
                  <div className="col-span-2">
                    <Fact label="What we built" value={p.built} />
                  </div>
                </dl>
                {p.note && <p className="mt-6 text-sm text-muted-foreground">{p.note}</p>}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export const Process = () => (
  <section id="process" className="py-24 sm:py-32 bg-card">
    <div className="wrap">
      <h2 className="h2">How a project runs</h2>
      <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {steps.map((s, n) => (
          <li key={s.title} className="border-t-2 border-foreground pt-6">
            <span className="font-display text-6xl font-extrabold text-primary leading-none">{n + 1}</span>
            <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export const About = () => (
  <section id="about" className="py-24 sm:py-32">
    <div className="wrap grid gap-14 lg:grid-cols-12">
      <p className="lg:col-span-8 font-display text-[1.9rem] sm:text-[2.6rem] font-bold leading-[1.15] tracking-[-0.025em]">
        Revora started inside a bus company in Bosnia and Herzegovina. We built the system, with AI inside, that now runs
        its office every day. Now we do the same for other businesses.
      </p>
      <dl className="lg:col-span-4 lg:pl-8 space-y-6 self-end">
        <Fact label="Based in" value="Bosnia and Herzegovina" />
        <Fact label="We work in" value="English, Bosnian, Croatian, Serbian" />
        <Fact label="Clients" value="The region and the EU, remotely" />
        <Fact label="Pricing" value="Fixed quote, then a monthly plan" />
      </dl>
    </div>
  </section>
);

export const FAQ = () => (
  <section id="faq" className="py-24 sm:py-32 bg-card">
    <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <h2 className="h2">Questions people ask first</h2>
      <Accordion type="single" collapsible className="border-t border-foreground">
        {faqs.map((f, n) => (
          <AccordionItem key={n} value={`f${n}`} className="border-b border-border">
            <AccordionTrigger className="py-6 text-left font-display text-xl font-bold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed max-w-[38rem]">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
