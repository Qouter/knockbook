import Link from "next/link";
import SideBar from "../components/SideBar";
import Gallery from "../components/Gallery";
import { createClient } from "@supabase/supabase-js";

export default function Market({ products }) {
  return (
    <>
      <div>{<Gallery products={products} />}</div>
    </>
  );
}

Market.getLayout = function getLayout(page) {
  return (
    <div>
      <SideBar />
      {page}
    </div>
  );
};

export async function getStaticProps() {
  const supabase = createClient(
    "https://bavxfpdhdtqpwondispf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhdnhmcGRoZHRxcHdvbmRpc3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ4MDM5NTksImV4cCI6MTk3MDM3OTk1OX0.kjKDIaUSpMxQgao5fnXZTqGd4iYvnJA770aTNiw846U"
  );

  // let { storage } = await supabase.storage.from("knockbooks").select("*");

  let { data: products, error } = await supabase.from("products").select("*");
  let productsList = [];

  products.forEach((product) => {
    productsList.push(product.image);
  });
  return {
    props: {
      products: products,
    },
  };
}
