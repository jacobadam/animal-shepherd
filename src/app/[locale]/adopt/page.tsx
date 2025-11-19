"use client";

import Image from "next/image";

import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

export default function Adopt() {
  const clickButton = () => {
    console.log("hit");
  };
  return (
    <div className="relative min-h-screen w-full pt-16 bg-primary">
      <section className="flex flex-col items-center justify-center px-8 mb-4">
        <div className="relative w-full h-96">
          <Image
            src="/dog-55.webp"
            alt="Good boy"
            fill
            className="object-cover"
          ></Image>
        </div>
        <h1 className="text-secondary-dark font-bold text-3xl md:text-5xl my-4 text-center">
          Adopt and Change a Life
        </h1>
        <p className="text-secondary text-md font-normal mb-4 text-center">
          Interested in adopting a dog, a cat or a pair of kitties? We&apos;d
          love to talk to you!
        </p>
        <div className="flex flex-row justify-center items-center">
          <Button variant="secondary" onClick={clickButton}>
            Apply to Adopt
          </Button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-8 mb-4">
        <h1 className="text-secondary-dark text-2xl font-semibold mb-4">
          About Adopting
        </h1>
        <p className="text-secondary text-md font-normal mb-4 text-center">
          We are committed to helping you find the right dog, cat or kitten for
          your family situation. You can download our application and contract
          here on the website. We have all our dogs, cats and kittens listed
          with a little biography of each, as well as many photos and a video of
          each. Feel free to call and ask questions about any of our cats. We
          would love to meet you at any of our adoption events or perhaps
          arrange a visit with the foster family.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center px-8 mb-4">
        <h1 className="text-secondary-dark text-2xl font-semibold">
          How to Adopt
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-4 max-w-full">
          <div className="text-center p-4 rounded-xl">
            <h2 className="text-secondary-dark pb-2 text-lg font-semibold">
              Step 1: Browse Available Pets
            </h2>
            <p className="text-secondary">
              Explore our website to find the perfect pet that matches your
              lifestyle and preferences.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl">
            <h2 className="text-secondary-dark pb-2 text-lg font-semibold">
              Step 2: Submit an Application
            </h2>
            <p className="text-secondary">
              Fill out our adoption application form with details about your
              home and lifestyle.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl">
            <h2 className="text-secondary-dark pb-2 text-lg font-semibold">
              Step 3: Meet and Greet
            </h2>
            <p className="text-secondary">
              Arrange a meeting with the pet to ensure compatibility and answer
              any questions.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl">
            <h2 className="text-secondary-dark pb-2 text-lg font-semibold">
              Step 4: Finalize Adoption
            </h2>
            <p className="text-secondary">
              Complete the adoption process, including paperwork and fees, to
              welcome your new pet home.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary p-8 mb-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-primary text-2xl font-semibold mb-4">
            Meet a few adoptable pets at our sanctuary:
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          <Card image="/dog-24.webp" alt="Dog sitting" />

          <Card image="/cat-04.webp" alt="Cat looking" />

          <Card image="/dog-28.webp" alt="Dog posing" />

          <Card image="/cat-06.webp" alt="Cat relaxing" />

          <Card image="/dog-45.webp" alt="Dog relaxing" />

          <Card image="/dog-27.webp" alt="Dog relaxing" />

          <Card image="/cat-17.webp" alt="Cat relaxing" />

          <Card image="/dog-39.webp" alt="Dog relaxing" />

          <Card image="/cat-12.webp" alt="Cat relaxing" />

          <Card image="/dog-47.webp" alt="Dog relaxing" />

          <Card image="/cat-18.webp" alt="Cat relaxing" />

          <Card image="/dog-65.webp" alt="Dog relaxing" />
        </div>
      </section>
    </div>
  );
}
