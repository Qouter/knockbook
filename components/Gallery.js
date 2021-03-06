import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Gallery({ products }) {
  return (
    <div className="flex-1 w-screen max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((image) => (
          <BlurImage key={image.image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

function BlurImage(product) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="group" key={product.image.id}>
      <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <Link href={`./products/${product.image.id}`} className="group">
          <Image
            alt=""
            src={product.image.image}
            layout="fill"
            objectFit="cover"
            className={cn(
              "duration-700 ease-in-out group-hover:opacity-75",
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </Link>
      </div>
      <p className="mt-4 text-lg font-medium text-gray-900">
        {product.image.price}€
      </p>
      <h3 className="mt-1 text-sm text-gray-700">{product.image.name}</h3>
    </div>
  );
}
