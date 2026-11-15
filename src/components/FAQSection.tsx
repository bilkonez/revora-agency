import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who are your products for?",
    answer:
      "Coach and bus operators, trucking companies, couriers and any business that runs vehicles, from a single van to large fleets.",
  },
  {
    question: "What does the AI actually do?",
    answer:
      "It reads receipts, invoices and transport documents and turns them into data, warns you before vehicle and driver deadlines expire, checks driving and rest times, and shows the profit of each trip.",
  },
  {
    question: "Can you connect to our GPS devices and tachographs?",
    answer:
      "That is the plan for Flotiva: we connect to the GPS and tachograph systems you already use through their APIs, instead of asking you to install new hardware. Tell us what you use and we will check it.",
  },
  {
    question: "Is Flotiva available now?",
    answer:
      "Flotiva is in early access. Leave your details in the form below and we will invite you as soon as your segment is ready.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes, for larger operators who need their own system. Whatever we build to measure, we try to bring back into our products, so it keeps improving.",
  },
  {
    question: "Do driving-time warnings replace our legal obligations?",
    answer:
      "No. Our tools help you stay on top of the rules, but the operator and the driver remain responsible for compliance.",
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            What transport companies usually ask us.
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
