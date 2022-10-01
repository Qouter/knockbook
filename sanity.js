import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.SANITY_PUBLIC_DATASET,
  projectId: "nb4p8sof",
  apiVersion: "2022-07-09",
  userCdn: process.env.NODE_ENV == "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
