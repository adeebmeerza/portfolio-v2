"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { CheckCircle2, Mail, XCircleIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().max(250).trim(),
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      ...values,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_PUBLIC_ACCESS_KEY!,
    };

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          const error = (data && data.message) || res.status;
          return Promise.reject(error);
        }

        setIsSubmitted(true);
        setIsSubmissionSuccessful(true);
      })
      .catch((error) => {
        setIsSubmitted(true);
        setIsSubmissionSuccessful(false);
        console.error("Error on contact form", error);
      });
  }

  const resetForm = () => {
    setIsSubmitted(false);
    setIsSubmitted(false);
    setIsSubmissionSuccessful(false);
  };

  return (
    <>
      {isSubmitted && isSubmissionSuccessful ? (
        <div className="bg-green-50 dark:bg-green-800 border border-green-100 dark:border-green-700 rounded-md p-4 flex flex-col items-center text-center">
          <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
          <h4 className="font-medium text-sm mb-1">
            Thank you for reaching me!
          </h4>
          <p className="text-xs text-muted-foreground mb-3">
            I&apos;ll reply to your message by your email shortly.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={resetForm}
            className="text-xs"
          >
            Send another message
          </Button>
        </div>
      ) : isSubmitted && !isSubmissionSuccessful ? (
        <div className="bg-red-50 dark:bg-red-800 border-2 border-red-100 dark:border-red-700 rounded-md p-4 flex flex-col items-center text-center">
          <XCircleIcon className="h-8 w-8 text-destructive mb-2" />
          <h4 className="font-medium text-md mb-2 text-destructive">
            Something mishappening.
          </h4>
          <p className="text-sm text-gray-700 mb-1">
            Message failed to send. Send me your message to:
          </p>
          <p className="text-sm text-gray-700 mb-3">
            <span className="flex">
              <Mail className="h-4 w-4 mr-2 mt-0.5" />
              <a
                href="mailto:adib.mirza.dev@gmail.com"
                className="hover:text-primary transition-colors"
              >
                adib.mirza.dev@gmail.com
              </a>
            </span>
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={resetForm}
            className="text-xs w-full"
          >
            Send another message
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-4 space-y-2 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} className="text-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      className="h-[70px] text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              variant="default"
              className="w-full bg-primary/50 text-foreground/90"
            >
              Submit
            </Button>
          </form>
        </Form>
      )}
    </>
  );
};

export default ContactForm;
