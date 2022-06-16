import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYGLAP1Bci_ikgywZ90daSeElNf1nucVc",
  authDomain: "knockbook-2ab9b.firebaseapp.com",
  projectId: "knockbook-2ab9b",
  storageBucket: "knockbook-2ab9b.appspot.com",
  messagingSenderId: "800646575452",
  appId: "1:800646575452:web:b99402f7ebc428cd62fd99",
  measurementId: "G-LKQ4ZDD5NQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async () => {
  const productsCol = collection(db, "products");
  const productsSnapshot = await getDocs(productsCol);
  return productsSnapshot.docs.map((doc) => doc.data());
};
