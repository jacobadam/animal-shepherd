export interface AdoptionStep {
  number: string;
  title: string;
  description: string;
}

export const adoptionSteps: AdoptionStep[] = [
  {
    number: "01",
    title: "Browse Residents",
    description:
      "Explore our available animals below to find a pet that matches your lifestyle.",
  },
  {
    number: "02",
    title: "Submit Application",
    description:
      "Complete the adoption form with details about your home and previous experience.",
  },
  {
    number: "03",
    title: "Meet & Greet",
    description:
      "Arrange an introduction to ensure compatibility between you and the animal.",
  },
  {
    number: "04",
    title: "Finalize & Welcome",
    description:
      "Complete the final paperwork and prepare your home for your new best friend.",
  },
];
