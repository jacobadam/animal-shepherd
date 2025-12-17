"use client";

import Image from "next/image";

import { Button } from "../components/ui/Button";
import { AnimalCard } from "../components/ui/AnimalCard";

export default function Adopt() {
  return (
    <div className="relative min-h-screen w-full bg-primary">
      <section className="w-screen">
        <div className="relative w-full h-[40vh] md:h-[45vh]">
          <Image
            src="/dog-55.webp"
            alt="Good boy"
            fill
            className="object-cover"
          ></Image>
        </div>
      </section>

      <section className="bg-secondary flex flex-col items-center px-6 md:px-12 lg:px-20 pt-12 pb-16">
        <h2 className="text-primary text-2xl md:text-4xl font-semibold mb-6 text-center">
          Adopt and Change a Life
        </h2>
        <div className="max-w-3xl space-y-6 text-center">
          <p className="text-primary text-md leading-relaxed">
            Our sanctuary believes every animal deserves security, compassion,
            and a place to thrive. This page explains how our adoption process
            works and what you can expect when you begin your journey toward
            welcoming a new companion.
          </p>
        </div>
        <div className="mt-10">
          <Button variant="primary" href="/forms/contrato_de_adopción.pdf">
            Apply to Adopt
          </Button>
        </div>
      </section>

      <section className="bg-primary flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-secondary-dark text-2xl font-semibold mb-6">
          About Adopting
        </h2>
        <div className="max-w-3xl text-secondary-dark text-md font-normal text-center px-4 leading-relaxed space-y-6">
          <p className="">
            We are committed to helping you find the right dog, cat, or kitten
            for your family and lifestyle. Our adoption process is thoughtful
            and focused on the long-term wellbeing of each animal, ensuring
            every placement is safe, responsible, and a good match for both the
            animal and the adopter.
          </p>
          <p className="">
            To begin the adoption process, you can download our adoption
            application directly from this page. After reviewing your
            application, our team will be in touch to discuss next steps, answer
            any questions, and arrange a suitable introduction when appropriate.
          </p>
        </div>
      </section>

      <section className="bg-secondary flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-primary text-2xl font-semibold">How to Adopt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-4 max-w-full">
          <div className="text-center p-4 rounded-xl">
            <h3 className="text-primary pb-2 text-lg font-semibold">
              Step 1: Browse Available Pets
            </h3>
            <p className="text-primary">
              Explore our website to find the perfect pet that matches your
              lifestyle and preferences.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl">
            <h3 className="text-primary pb-2 text-lg font-semibold">
              Step 2: Submit an Application
            </h3>
            <p className="text-primary">
              Fill out our adoption application form with details about your
              home and lifestyle.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl">
            <h3 className="text-primary pb-2 text-lg font-semibold">
              Step 3: Meet and Greet
            </h3>
            <p className="text-primary">
              Arrange a meeting with the pet to ensure compatibility and answer
              any questions.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl">
            <h3 className="text-primary pb-2 text-lg font-semibold">
              Step 4: Finalize Adoption
            </h3>
            <p className="text-primary">
              Complete the adoption process, including paperwork and fees, to
              welcome your new pet home.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-secondary-dark text-2xl font-semibold mb-4">
            Meet some of our animals:
          </h2>
          <p className="text-secondary-dark text-center max-w-xl mx-auto mb-4">
            The animals shown here represent some of the many individuals who
            have been part of our sanctuary, both past and present, and offer a
            glimpse into daily life and care at the sanctuary.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimalCard src="/dog-24.webp" alt="Dog sitting" />

          <AnimalCard src="/cat-04.webp" alt="Cat looking" />

          <AnimalCard src="/dog-28.webp" alt="Dog posing" />

          <AnimalCard src="/cat-06.webp" alt="Cat relaxing" />

          <AnimalCard src="/dog-45.webp" alt="Dog relaxing" />

          <AnimalCard src="/dog-27.webp" alt="Dog relaxing" />

          <AnimalCard src="/cat-17.webp" alt="Cat relaxing" />

          <AnimalCard src="/dog-39.webp" alt="Dog relaxing" />

          <AnimalCard src="/cat-12.webp" alt="Cat relaxing" />

          <AnimalCard src="/dog-47.webp" alt="Dog relaxing" />

          <AnimalCard src="/cat-18.webp" alt="Cat relaxing" />

          <AnimalCard src="/dog-65.webp" alt="Dog relaxing" />
        </div>
      </section>
    </div>
  );
}
