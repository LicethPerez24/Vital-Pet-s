import { Carousel } from "flowbite-react";

export function Component() {
  return (
    <div className="rounded-none h-[40rem] sm:h-64 xl:h-80 2xl:h-[40rem]">
      <Carousel slideInterval={1800}>
        <img src="./Vet1.webp" alt="..." />
        <img src="./Vet2.webp" alt="..." />
        <img src="./Vet3.webp" alt="..." />
        <img src="./Vet2.webp" alt="..." />
        <img src="./Vet1.webp" alt="..." />
      </Carousel>
    </div>
  );
}
