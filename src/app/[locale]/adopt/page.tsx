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
      <section className="flex flex-col items-center justify-center">
        <div className="relative w-full h-96">
          <Image
            src="/dog-55.webp"
            alt="Good boy"
            fill
            className="object-cover"
          ></Image>
        </div>
        <h1 className="text-secondary-dark font-bold text-3xl md:text-5xl my-4 pr-0 md:pr-5 text-center">
          Adopt and Change a Life
        </h1>
        <p className="text-secondary text-md font-normal mb-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          malesuada, risus at blandit ultricies, urna orci dignissim purus, sed
          rutrum.
        </p>
        <div className="flex flex-row gap-4 mb-0 md:mb-8">
          <Button variant="secondary" onClick={clickButton}>
            Apply to Adopt
          </Button>
          <Button variant="primary" href="getinvolved">
            Learn About Adopting
          </Button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-8">
        <h1 className="text-2xl font-semibold mb-4">
          How the Adoption Process Works
        </h1>
        <div className="flex flex-row items-center justify-center gap-8 my-4">
          <div className="text-center p-4 rounded-xl">
            <h2 className="pb-2 text-lg font-semibold">
              Step 1: Browse Available Pets
            </h2>
            <p>
              Explore our website to find the perfect pet that matches your
              lifestyle and preferences.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl">
            <h2 className="pb-2 text-lg font-semibold">
              Step 2: Submit an Application
            </h2>
            <p>
              Fill out our adoption application form with details about your
              home and lifestyle.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl">
            <h2 className="pb-2 text-lg font-semibold">
              Step 3: Meet and Greet
            </h2>
            <p>
              Arrange a meeting with the pet to ensure compatibility and answer
              any questions.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl">
            <h2 className="pb-2 text-lg font-semibold">
              Step 4: Finalize Adoption
            </h2>
            <p>
              Complete the adoption process, including paperwork and fees, to
              welcome your new pet home.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary p-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-primary text-2xl font-semibold mb-4">
            Meet a few adoptable pets at our sanctuary:
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          <Card image="/dog-20.webp" alt="Dog sitting" />

          <Card image="/cat-01.webp" alt="Cat looking" />

          <Card image="/dog-26.webp" alt="Dog posing" />

          <Card image="/cat-03.webp" alt="Cat relaxing" />

          <Card image="/dog-42.webp" alt="Dog relaxing" />

          <Card image="/dog-27.webp" alt="Dog relaxing" />

          <Card image="/cat-17.webp" alt="Cat relaxing" />

          <Card image="/dog-36.webp" alt="Dog relaxing" />

          <Card image="/cat-02.webp" alt="Cat relaxing" />

          <Card image="/dog-06.webp" alt="Dog relaxing" />

          <Card image="/cat-18.webp" alt="Cat relaxing" />

          <Card image="/dog-49.webp" alt="Dog relaxing" />
        </div>
      </section>
    </div>
  );
}
