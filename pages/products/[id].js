import AppLayout from "../../components/AppLayout";
import { useRouter } from "next/router";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import ProductDetail from "../../components/ProductDetail";

const firebaseConfig = {
  apiKey: "AIzaSyBYGLAP1Bci_ikgywZ90daSeElNf1nucVc",
  authDomain: "knockbook-2ab9b.firebaseapp.com",
  projectId: "knockbook-2ab9b",
  storageBucket: "knockbook-2ab9b.appspot.com",
  messagingSenderId: "800646575452",
  appId: "1:800646575452:web:b99402f7ebc428cd62fd99",
  measurementId: "G-LKQ4ZDD5NQ",
};

export default function Product({ products }) {
  const router = useRouter();

  const product =
    products && products.filter((product) => product.id === router.query.id)[0];

  const retDiv = product ? (
    <ProductDetail product={product} />
  ) : (
    <h2>LOADING</h2>
  );

  return retDiv;
}

Product.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const productsCol = collection(db, "products");
  const productsSnapshot = await getDocs(productsCol);
  const productsList = productsSnapshot.docs.map((doc) => doc.data());

  return {
    props: {
      products: productsList,
    },
  };
}
