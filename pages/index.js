import AppLayout from "../components/AppLayout";
import Gallery from "../components/Gallery";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBYGLAP1Bci_ikgywZ90daSeElNf1nucVc",
  authDomain: "knockbook-2ab9b.firebaseapp.com",
  projectId: "knockbook-2ab9b",
  storageBucket: "knockbook-2ab9b.appspot.com",
  messagingSenderId: "800646575452",
  appId: "1:800646575452:web:b99402f7ebc428cd62fd99",
  measurementId: "G-LKQ4ZDD5NQ",
};

export default function Home({ products }) {
  return <>{<Gallery products={products} />}</>;
}

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

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
