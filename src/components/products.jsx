import "./general.css";
export default function Products() {
  return (
    <div className="container flex p-32">
      <div className="flex flex-col items-center justify-center w-[161rem]">
        <h1 className="text-3xl font-bold text-red-400">Nuestros Servicios</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo
          quos aspernatur laborum excepturi aperiam unde voluptatem? Non unde
          molestiae, optio, nemo natus tempora repellendus voluptate laborum
          distinctio quia neque.
        </p>
      </div>
      <div className="imagesCon grid grid-cols-2 gap-2">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="./src/assets/perr1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="./src/assets/perr2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="./src/assets/perr3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="./src/assets/perr1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
