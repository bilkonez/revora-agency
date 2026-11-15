import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", type: "Flotiva early access", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thanks! We'll be in touch within 24 hours.",
      });
      setForm({ name: "", email: "", type: "Flotiva early access", message: "" });
    } catch (err) {
      console.error("Failed to send:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at hello@revora.agency",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/40">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.02em] text-foreground mb-4">
          Let's talk about your fleet
        </h2>
        <p className="text-muted-foreground mb-12">
          Tell us what you run and what slows you down. We'll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Name and company"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full h-12 px-4 bg-card border border-border/60 rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full h-12 px-4 bg-card border border-border/60 rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full h-12 px-4 bg-card border border-border/60 rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
          >
            <option>Flotiva early access</option>
            <option>Coachboard</option>
            <option>Nexa Express</option>
            <option>Custom software</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="How many vehicles, what kind of transport, what you need..."
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 bg-card border border-border/60 rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
          />
          <Button variant="hero" size="lg" type="submit" className="w-full" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </form>

        <p className="mt-8 text-sm text-muted-foreground">hello@revora.agency</p>
      </div>
    </section>
  );
};

export default ContactSection;
