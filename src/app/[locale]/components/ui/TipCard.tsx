import Image from "next/image";

type TipCardProps = {
  src: string;
  alt: string;
};

export const TipCard = ({ src, alt }: TipCardProps) => {
  return (
    <div className="w-full h-auto">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={1200}
        className="w-full h-auto object-cover"
        priority={false}
      />
    </div>
  );
};
