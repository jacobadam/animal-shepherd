"use client";

import Image from "next/image";

import { Button } from "../components/ui/Button";
import { HeroActionBox } from "../components/ui/HeroActionBox";

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dog-01.webp"
            alt="The Animal Shepherd sanctuary grounds"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Join Our Sanctuary Team
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
            Animal Shepherd operates independently near Mexico City as one of
            Mexico&apos;s largest farm sanctuaries. Together, we can help more
            animals.
          </p>
        </div>
      </section>

      <HeroActionBox
        title="Our No-Kill Philosophy"
        description="We believe that every life is precious and that every animal deserves a chance to be safe, healthy, and loved. We never euthanize an animal in our care simply because they are old, require expensive medical care, or because of insufficient space in our facilities."
        buttonLabel="Support Our Mission"
        buttonHref="/donate"
        buttonVariant="primary"
      />

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-secondary-dark uppercase tracking-tight">
                Volunteer
              </h3>
              <div className="h-1 w-16 bg-secondary rounded-full" />
            </div>
            <p className="text-secondary text-lg leading-relaxed">
              We are an all-volunteer non-profit that receives no state or
              federal funding. In our first five years, we have rescued and
              fostered over 1,000 animals. Join our sanctuary team and help us
              provide the hands-on care our residents deserve.
            </p>
            <div className="pt-4">
              <Button variant="secondary" size="lg" href="/contact">
                Become a Volunteer
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-secondary-dark uppercase tracking-tight">
                Adopt
              </h3>
              <div className="h-1 w-16 bg-secondary rounded-full" />
            </div>
            <p className="text-secondary text-lg leading-relaxed">
              Interested in adopting? We are committed to finding the right
              match for your family. View our resident biographies, photos, and
              videos. We offer support throughout the process to ensure a
              successful transition for both you and your new companion.
            </p>
            <div className="pt-4">
              <Button variant="primary" size="lg" href="/adopt">
                View Available Animals
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/5 py-24 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <header className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-4">
                Adoption Fees
              </h2>
              <p className="text-secondary text-sm max-w-md mx-auto">
                These fees help cover testing (FIV/Leukemia), vaccines, parasite
                treatment, spay/neuter, and microchipping.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                <p className="text-xs uppercase font-bold text-secondary/60 mb-1">
                  Cat / Kitten
                </p>
                <p className="text-3xl font-bold text-secondary-dark">$150</p>
              </div>
              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                <p className="text-xs uppercase font-bold text-secondary/60 mb-1">
                  Pair of Cats
                </p>
                <p className="text-3xl font-bold text-secondary-dark">$200</p>
              </div>
              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                <p className="text-xs uppercase font-bold text-secondary/60 mb-1">
                  Dog / Puppy
                </p>
                <p className="text-3xl font-bold text-secondary-dark">$250</p>
              </div>
            </div>

            <div className="text-center space-y-8">
              <p className="text-sm text-secondary italic">
                * Fees may vary based on special medical requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" href="mailto:info@animalshepherd.org">
                  Email Adoption Inquiry
                </Button>
                <Button variant="primary" href="/forms/application.pdf">
                  Download Application
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
