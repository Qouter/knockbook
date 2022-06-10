import Image from "next/image";
import { useState } from "react";
import { SupabaseStorageClient } from "@supabase/storage-js";
import { createClient } from "@supabase/supabase-js";
import SideBar from "../components/SideBar";

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

export default function Gallery({ images }) {
  return (
    <>
      <SideBar></SideBar>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <BlurImage key={"image.id"} image={image} />
          ))}
        </div>
      </div>
    </>
  );
}

function BlurImage(image) {
  const [isLoading, setLoading] = useState(true);
  return (
    <a href={image} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.image}
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
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </a>
  );
}

export async function getStaticProps() {
  const supabase = createClient(
    "https://bavxfpdhdtqpwondispf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhdnhmcGRoZHRxcHdvbmRpc3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ4MDM5NTksImV4cCI6MTk3MDM3OTk1OX0.kjKDIaUSpMxQgao5fnXZTqGd4iYvnJA770aTNiw846U"
  );

  let { storage } = await supabase.storage.from("knockbooks");
  let { data: products, error } = await supabase.from("products").select("*");

  let images = [];
  products.forEach((element) => {
    images.push(element.image);
  });
  return {
    props: {
      images: images,
    },
  };
}
