"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import React, { useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

const initialState = {
  message: "",
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);


  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && (state.errors || !state.success)) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-foreground/80">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" required />
        {state.errors?.name && (
          <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email" className="text-foreground/80">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          required
        />
        {state.errors?.email && (
          <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message" className="text-foreground/80">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          rows={4}
        />
        {state.errors?.message && (
          <p className="text-sm text-destructive mt-1">
            {state.errors.message[0]}
          </p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
