import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselContainerProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function CarouselContainer<T>(props: CarouselContainerProps<T>) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl h-full"
    >
      <CarouselContent>
        {props.items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            {props.renderItem(item)}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
