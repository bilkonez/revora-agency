import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const TYPES = ["Software or web app", "Website", "AI or automation", "Online shop", "Web domain and hosting", "Something else"];
const EMAIL = "hello@revora.agency";

const field =
  "w-full rounded-xl bg-white/[0.06] border border-white/15 px-4 text-white placeholder:text-white/45 focus:outline-none focus:border-white/60 focus:bg-white/[0.09] transition-colors";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", type: TYPES[0], message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", { body: form });
      if (error) throw error;
      toast({ title: "Message sent", description: "We will reply within 24 hours." });
      setForm({ name: "", email: "", type: TYPES[0], message: "" });
    } catch (err) {
      console.error("Failed to send:", err);
      toast({
        title: "Message not sent",
        description: `Check your connection and send it again, or write to ${EMAIL}.`,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-foreground text-white py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-2">
        <div>
          <h2 className="h2">Tell us what you want to build.</h2>
          <p className="mt-6 text-lg text-white/70 max-w-md">
            A rough idea is enough. We reply within 24 hours with questions or a first plan.
          </p>
          <a href={`mailto:${EMAIL}`} className="mt-10 inline-block font-display text-2xl sm:text-3xl font-bold underline decoration-accent decoration-[3px] underline-offset-[6px] hover:decoration-white">
            {EMAIL}
          </a>
        </div>

        <form onSubmit={submit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-white/70">
              Name and company
              <input required className={`${field} h-12`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label className="grid gap-2 text-sm text-white/70">
              Email
              <input required type="email" className={`${field} h-12`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </label>
          </div>
          <fieldset className="grid gap-2">
            <legend className="text-sm text-white/70 mb-2">What do you need?</legend>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <label key={t} className={`cursor-pointer rounded-full px-4 h-10 inline-flex items-center text-sm font-medium border transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-white ${form.type === t ? "bg-white text-foreground border-white" : "border-white/20 text-white/80 hover:border-white/50"}`}>
                  <input type="radio" name="type" value={t} checked={form.type === t} onChange={() => setForm({ ...form, type: t })} className="sr-only" />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="grid gap-2 text-sm text-white/70">
            About your project
            <textarea required rows={5} className={`${field} py-3 resize-none`} placeholder="What does your business do, and what would you like to build?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </label>
          <button type="submit" disabled={sending} className="btn mt-2 bg-white text-foreground hover:bg-accent disabled:opacity-60">
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
