import AppLayout from "../components/AppLayout";
import Gallery from "../components/Gallery";
import { getProducts } from "../firebase/client";

export default function Home({ products }) {
  return <Gallery products={products} />;
}

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
    revalidate: 5,
  };
}
