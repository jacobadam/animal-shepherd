"use client";

import Image from "next/image";

import { Button } from "../components/ui/Button";
import { HeroActionBox } from "../components/ui/HeroActionBox";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/owner-dog-14.webp"
            alt="The peaceful grounds of Animal Shepherd sanctuary"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Our Mission
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
            Fighting for the abandoned, neglected, and injured. We believe every
            life is precious and deserves a chance to thrive.
          </p>
        </div>
      </section>

      <HeroActionBox
        title="Who We Are"
        description="Animal Shepherd is a non-profit, no-kill animal rescue organization committed to animals living with challenges that would otherwise leave them without a chance. From rescue to rehabilitation, we provide a no-cage sanctuary where they can live safely and free from harm."
        buttonLabel="Get Involved"
        buttonHref="/getinvolved"
      />

      <section className="py-24 px-6 lg:px-20 max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our Sanctuary
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </header>

        <div className="space-y-8 text-secondary text-lg leading-relaxed text-center">
          <p>
            What began as a mission to help cats, dogs, and farm animals has
            grown into a multifaceted sanctuary. Today, Animal Shepherd operates
            a no-cage shelter, pet-assisted therapy center, and eco-friendly
            retreat. Our facilities consist of three main buildings and smaller
            structures designed for comfort, healing, and fresh-air access.
          </p>
          <p>
            Visitors often describe our space as a place of calm. It is a refuge
            where compassion, care, and respect for life are felt immediately
            upon arrival.
          </p>
        </div>
      </section>

      <section className="bg-secondary/5 py-24 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-secondary-dark">
            Our Impact & Responsibility
          </h2>
          <div className="text-secondary text-lg leading-relaxed space-y-6">
            <p>
              Each year, we save the lives of more than 400 homeless animals and
              provide daily care for approximately 60 dogs, 40 cats, and
              additional farm residents. Every life is treated with dignity,
              patience, and long-term commitment.
            </p>
            <p>
              Beyond rescue, we are responsible for investigating cases of
              neglect and abuse. Our work extends to managing feral populations
              and providing alternatives for animals facing euthanasia, focusing
              on prevention and long-term education.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our Pillars of Care
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
          <p className="text-secondary max-w-2xl mx-auto mt-6">
            Our work is structured across three strategic areas to ensure a
            comprehensive approach to animal welfare and community
            sustainability.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-primary border border-gray-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-secondary-dark mb-4">
              Rescue & Clinical
            </h3>
            <ul className="space-y-3 text-secondary text-sm">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                24-hour emergency response services
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                Veterinary care and spay/neuter programs
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                Adoption and rehabilitation services
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                Hospice care and specialized medical support
              </li>
            </ul>
          </div>

          <div className="p-8 bg-primary border border-gray-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-secondary-dark mb-4">
              Sanctuary & Wellness
            </h3>
            <ul className="space-y-3 text-secondary text-sm">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                Farm sanctuary and animal shelter
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                Pet hotel, eco camping, and lodging
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                Animal-assisted therapy center
              </li>
            </ul>
          </div>

          <div className="p-8 bg-primary border border-gray-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-secondary-dark mb-4">
              Advocacy & Outreach
            </h3>
            <ul className="space-y-3 text-secondary text-sm">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                Dog training and behavioral programs
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                Permaculture and sustainable living workshops
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                Community consulting and animal advocacy
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/owner-dog-30.webp"
              alt="Founder of Animal Shepherd with a rescue animal"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <div className="h-1 w-20 bg-secondary rounded-full" />

            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>

            <blockquote className="border-l-4 border-secondary pl-6 italic text-secondary-dark font-medium">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim ad minim veniam.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/5 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-secondary-dark mb-6">
            Join Our Mission
          </h2>
          <p className="text-secondary mb-10 text-lg">
            There are many ways to support our residents. Whether through
            adoption, volunteering, or donating, you can help us continue our
            commitment to rescue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" href="/getinvolved" className="px-10">
              Get Involved
            </Button>
            <Button variant="secondary" href="/adopt" className="px-10">
              Learn About Adopting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
