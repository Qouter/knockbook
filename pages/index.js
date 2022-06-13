import AppLayout from "../components/AppLayout";
import Gallery from "../components/Gallery";
import { createClient } from "@supabase/supabase-js";

export default function Home({ products }) {
  return <>{<Gallery products={products} />}</>;
}

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
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
