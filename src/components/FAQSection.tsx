import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What AI technologies do you use in your projects?",
    answer:
      "We leverage cutting-edge AI tools including OpenAI GPT models, custom machine learning pipelines, natural language processing, and computer vision — all tailored to your specific business needs and integrated seamlessly into your product.",
  },
  {
    question: "How long does a typical AI-powered project take?",
    answer:
      "Most projects are delivered within 2–6 weeks depending on complexity. A simple AI landing page or chatbot takes ~2 weeks, while a full AI SaaS platform with custom models can take 4–6 weeks. We provide a detailed timeline during our free consultation.",
  },
  {
    question: "Do I need technical knowledge to work with Revora?",
    answer:
      "Not at all. We handle everything from AI strategy and design to development and deployment. You just share your vision and business goals — our team takes care of the rest and keeps you updated at every step.",
  },
  {
    question: "What does AI-driven monetization mean?",
    answer:
      "AI-driven monetization uses intelligent systems to optimize your revenue streams — from dynamic pricing and personalized upsells to automated lead scoring and conversion optimization. We build custom AI engines that actively increase your bottom line.",
  },
  {
    question: "Can you integrate AI into my existing product?",
    answer:
      "Absolutely. We specialize in retrofitting AI capabilities into existing platforms — whether it's adding an intelligent chatbot, automating workflows, or building recommendation engines. Our solutions integrate via APIs with minimal disruption.",
  },
  {
    question: "What's included in the free consultation?",
    answer:
      "Our free consultation includes a full audit of your current digital presence, AI opportunity assessment, competitive analysis, and a custom roadmap with actionable recommendations. No commitment required — just valuable insights for your business.",
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
            Everything you need to know about our AI-powered services.
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
