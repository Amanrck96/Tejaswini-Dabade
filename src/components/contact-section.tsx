import { ContactForm } from "./contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or want to work together? Leave your details and
            I&apos;ll get back to you.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2 text-left">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
