interface TipsCardData {
  id: number;
  title: string;
  heading: string;
  body: string;
}

export const getTipsData = (tips: (id: string) => string): TipsCardData[] => {
  const tipsArray = [];
  for (let i = 1; i <= 11; i++) {
    const tipsObj = {
      id: i,
      title: tips(`${i}.title`),
      heading: tips(`${i}.heading`),
      body: tips(`${i}.body`),
    };
    tipsArray.push(tipsObj);
  }

  return tipsArray;
};
