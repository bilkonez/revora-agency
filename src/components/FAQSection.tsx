import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Web apps, business systems, websites, online shops, integrations and AI automations, for companies in any industry. If you are not sure whether something can be built, ask us.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on what you need. After a first call we send a written plan and a fixed price, so you know the cost before any work starts.",
  },
  {
    question: "How long does it take?",
    answer:
      "A website usually takes one to three weeks, a business app a few weeks to a couple of months. We show you working versions along the way, not only at the end.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We can host and maintain the software on a monthly plan: updates, fixes, backups and small improvements. You are never left alone with it.",
  },
  {
    question: "Can you work with the tools we already use?",
    answer:
      "Usually yes. We connect to existing systems through their APIs or exports, so you keep what works and we build only what is missing.",
  },
  {
    question: "Do you work with clients outside Bosnia and Herzegovina?",
    answer:
      "Yes. We work remotely in English and Bosnian/Croatian/Serbian, with clients across the region and the EU.",
  },
];

const FAQSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="faq" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Questions we <span className="gradient-text">often get</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            What clients usually ask before starting a project.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-lg px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
