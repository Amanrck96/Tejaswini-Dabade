"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Get In Touch</h2>
      <p>Have a question or want to collaborate? Please provide your contact details below and I&apos;ll respond promptly.</p>
      <form name="contact" method="POST" data-netlify="true" className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit" className="w-full">Send</Button>
      </form>
    </div>
  );
}
