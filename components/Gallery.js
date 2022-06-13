import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

class Product {
  constructor(height, width, src) {
    this.id = id;
    this.href = height;
    this.imageSrc = src;
    this.name = name;
    this.imageSrc = width;
    this.username = username;
  }
}

export default function Gallery({ products }) {
  return (
    <div className="flex-1 w-screen max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((image) => (
          <BlurImage key={"image.id"} image={image} />
        ))}
      </div>
    </div>
  );
}

function BlurImage(product) {
  const [isLoading, setLoading] = useState(true);
  return (
    <a href={"https://www.google.com"} className="group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
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
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {product.username}
      </p>
    </a>
  );
}
