"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formState, setFormState] = useState({
    submitted: false,
    error: false
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Submit to the static HTML form endpoint
      const response = await fetch("/__forms", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        setFormState({ submitted: true, error: false });
        form.reset();
      } else {
        setFormState({ submitted: false, error: true });
      }
    } catch (error) {
      setFormState({ submitted: false, error: true });
    }
  };

  if (formState.submitted) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Thank You!</h2>
        <p>Your message has been received. I'll get back to you soon.</p>
        <Button onClick={() => setFormState({ submitted: false, error: false })} className="w-full">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Get In Touch</h2>
      <p>Have a question or want to collaborate? Please provide your contact details below and I&apos;ll respond promptly.</p>
      {formState.error && (
        <p className="text-red-500">There was an error submitting your message. Please try again.</p>
      )}
      <form name="contact" method="POST" onSubmit={handleSubmit} className="space-y-4">
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
