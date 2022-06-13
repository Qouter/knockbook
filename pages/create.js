import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYGLAP1Bci_ikgywZ90daSeElNf1nucVc",
  authDomain: "knockbook-2ab9b.firebaseapp.com",
  projectId: "knockbook-2ab9b",
  storageBucket: "knockbook-2ab9b.appspot.com",
  messagingSenderId: "800646575452",
  appId: "1:800646575452:web:b99402f7ebc428cd62fd99",
  measurementId: "G-LKQ4ZDD5NQ",
};

class Product {
  constructor(name, price, kind, description, file) {
    this.name = name;
    this.price = price;
    this.kind = kind;
    this.description = description;
    this.file = file;
  }
}

export default function Create() {
  const [file, setFile] = useState(null);

  function handleChange(e) {
    if (e.target.files[0]) setFile(e.target.files[0]);
  }

  const submitProduct = async (e) => {
    e.preventDefault();
    const path = `/images/${file.name}`;
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const productRef = ref(storage, path);
    uploadBytes(productRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-screen h-screen"
      onSubmit={submitProduct}
    >
      <div className="w-96">
        <div className="grid grid-cols-1 gap-8">
          <label className="block">
            <span className="text-gray-700">Nombre</span>
            <input
              id="name"
              name="name"
              type="text"
              className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Precio</span>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">¿De qué tipo es?</span>
            <select
              id="kind"
              className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
            >
              <option>Tipos 1</option>
              <option>Tipo 2</option>
              <option>Tipo 3</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Descripción</span>
            <textarea
              className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
              rows="3"
              id="description"
            ></textarea>
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <div className="flex justify-center">
                    <div className="mb-3 w-96">
                      <label
                        htmlFor="formFile"
                        className="inline-block mb-2 text-gray-700 form-label"
                      >
                        Añadir imagen
                      </label>
                      <input
                        className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="file"
                        id="file"
                        accept="image/png, image/jpeg"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="mt-2">
              <button
                className="w-20 text-white rounded-lg shadow-lg bg-slate-500 hover:text-black hover:bg-primary hover:shadow-2xl"
                type="submit"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

Create.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
