"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ArrowRight, BarChart3, Eye, EyeOff, ShieldCheck, Vote } from "lucide-react";
import { useAuthStore } from "@/lib/stores/auth";

const registerSchema = z.object({
  name: z.string().trim().min(2, "Enter your name (at least 2 characters)."),
  email: z.string().email("Enter a valid email address."),
  organization: z.string().optional(),
  password: z.string().min(12, "Password must be at least 12 characters."),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const inputClass = "w-full rounded-xl border border-[#dfe3ec] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition placeholder:text-[#a0a5b3] focus:border-[#4675d8] focus:ring-4 focus:ring-[#4675d8]/10";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const registerAction = useAuthStore((state) => state.register);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", organization: "", password: "" },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const organization = data.organization?.trim();
      await registerAction({
        name: data.name.trim(),
        email: data.email.trim(),
        organization,
        password: data.password,
      });
      toast.success(
        organization
          ? "Account created. Your organizer access request is pending review."
          : "Your VoteFlow account is ready.",
      );
      router.push("/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to create your account. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] lg:grid lg:grid-cols-[0.92fr_1.08fr]">
      <section className="relative isolate overflow-hidden bg-[#071b3c] px-6 py-8 text-white sm:px-10 sm:py-10 lg:flex lg:min-h-screen lg:flex-col lg:justify-between lg:px-14 lg:py-12">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_10%,rgba(48,101,222,0.52),transparent_42%),radial-gradient(ellipse_at_95%_90%,rgba(112,66,211,0.28),transparent_42%)]" />
        <div className="mx-auto w-full max-w-xl lg:my-auto lg:py-10">
          <Link href="/" className="inline-flex items-center gap-2.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#c7d6ff]"><Vote className="h-5 w-5" /></span>
            <span className="font-geist text-xl font-semibold tracking-tight">VoteFlow</span>
          </Link>

          <p className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-[#d4dcf2] sm:mt-16">
            <ShieldCheck className="h-3.5 w-3.5 text-[#b4c5ff]" />
            One account for voters and organizers
          </p>
          <h1 className="mt-5 max-w-xl font-geist text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
            Make space for every voice.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#c6d0e7] sm:text-base">
            Join a poll as a voter, or request organizer access to create and manage your own campaigns.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#b4c5ff]"><Vote className="h-4 w-4" /></span>
              <p className="mt-4 text-sm font-semibold">Vote with clarity</p>
              <p className="mt-1 text-xs leading-5 text-[#c6d0e7]">Find public polls and see the choices before you participate.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#d4c3ff]"><BarChart3 className="h-4 w-4" /></span>
              <p className="mt-4 text-sm font-semibold">Manage your polls</p>
              <p className="mt-1 text-xs leading-5 text-[#c6d0e7]">Keep campaigns and results together in your organizer workspace.</p>
            </div>
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-4 text-xs leading-5 text-[#c6d0e7]">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#b4c5ff]" />
            <p>Organizer access is reviewed before an account can create and publish polls. You can also request access after signing up.</p>
          </div>
        </div>
        <p className="hidden text-xs text-[#92a1c2] lg:block">VoteFlow · Polls and community voting</p>
      </section>

      <section className="flex items-center justify-center px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="w-full max-w-[470px]">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#004ac6]">Create an account</p>
            <h2 className="mt-3 font-geist text-3xl font-semibold tracking-[-0.04em] sm:text-[2.15rem]">Start with VoteFlow</h2>
            <p className="mt-2 text-sm leading-6 text-[#687184]">Create your account to vote or set up a poll.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="space-y-2">
              <label className="block text-sm font-medium" htmlFor="name">Full name</label>
              <input {...register("name")} className={inputClass} id="name" autoComplete="name" placeholder="Alex Rivera" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
              {errors.name && <p className="text-xs text-red-600" id="name-error">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium" htmlFor="email">Email address</label>
              <input {...register("email")} className={inputClass} id="email" autoComplete="email" placeholder="you@example.com" type="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
              {errors.email && <p className="text-xs text-red-600" id="email-error">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium" htmlFor="organization">Organization <span className="font-normal text-[#85899a]">· optional</span></label>
              <input {...register("organization")} className={inputClass} id="organization" autoComplete="organization" placeholder="Your organization name" aria-describedby="organization-hint" />
              <p className="text-xs leading-5 text-[#737686]" id="organization-hint">Add this to request organizer access. Approval is required before you can publish polls.</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium" htmlFor="password">Password</label>
              <div className="relative">
                <input {...register("password")} className={`${inputClass} pr-12`} id="password" autoComplete="new-password" placeholder="At least 12 characters" type={showPassword ? "text" : "password"} aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "password-error" : "password-hint"} />
                <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-xl text-[#737686] transition hover:text-[#0b1c30] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4675d8]" aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password ? <p className="text-xs text-red-600" id="password-error">{errors.password.message}</p> : <p className="text-xs text-[#85899a]" id="password-hint">Use at least 12 characters.</p>}
            </div>

            <button type="submit" disabled={isSubmitting} className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#004ac6] px-5 text-sm font-semibold text-white shadow-md shadow-[#004ac6]/15 transition hover:-translate-y-0.5 hover:bg-[#003ea8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004ac6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60">
              {isSubmitting ? "Creating your account…" : "Create account"}
              {!isSubmitting && <ArrowRight className="h-4 w-4" />}
            </button>
            <p className="text-center text-xs leading-5 text-[#85899a]">Your account starts with voter access. You can request organizer access whenever you are ready to publish a poll.</p>
          </form>

          <p className="mt-7 border-t border-[#e5e8f1] pt-6 text-center text-sm text-[#687184]">
            Already have an account? <Link className="font-semibold text-[#004ac6] hover:underline" href="/login">Sign in</Link>
          </p>
          <Link href="/" className="mt-5 block text-center text-xs font-medium text-[#85899a] hover:text-[#004ac6]">Back to VoteFlow home</Link>
        </div>
      </section>
    </main>
  );
}
