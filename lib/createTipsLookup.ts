interface TipsData {
  id: number;
  title: string;
  heading: string;
  body: string;
  src: string;
  alt: string;
}

interface TipsCardData {
  id: number;
  title: string;
  heading: string;
  body: string;
}

type TipsImageData = {
  id: number;
  src: string;
  alt: string;
};

export const lookupTable = (
  tipCardData: TipsCardData[],
  tipImageData: TipsImageData[]
): TipsData[] => {
  const lookup: Record<number, TipsCardData> = {};

  for (const card of tipCardData) {
    lookup[card.id] = card;
  }

  const result: TipsData[] = [];

  for (const image of tipImageData) {
    const card = lookup[image.id];
    if (!card) continue;

    result.push({
      ...card,
      src: image.src,
      alt: image.alt,
    });
  }

  return result;
};
