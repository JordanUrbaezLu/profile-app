"use client";

import { Input } from "@/app/libs/components/ui/input";
import { Label } from "@/app/libs/components/ui/label";
import CreateAccountButton from "@/app/libs/components/create-account-button";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/app/libs/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/libs/components/ui/form";
import { useCreateAccountMutation } from "@/app/libs/hooks/mutations/useCreateAccountMutation";

const formSchema = z.object({
  email: z.string().min(2).max(30),
  name: z.string().min(2).max(30),
  password: z.string().min(2).max(30),
});

const CreateAccountForm = () => {
  const { isPending, mutate } = useCreateAccountMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  console.log(form);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => {
            mutate({
              email: values.email,
              name: values.name,
              password: values.password,
            });
          })}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                  This is your email linked to this account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormDescription>
                  This is the password to login to your account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <CreateAccountButton isPending={isPending} type="submit" />
        </form>
      </Form>
    </>
  );
};

export default CreateAccountForm;
