import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const products = [
  {
    name: "D2",
    url: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf",
    downloadUrl: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf?download=1"
  },
  {
    name: "K100",
    url: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf",
    downloadUrl: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf?download=1"
  },
  {
    name: "H13",
    url: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf",
    downloadUrl: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf?download=1"
  },
  {
    name: "4140",
    url: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf",
    downloadUrl: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf?download=1"
  },
  {
    name: "EN31, Bearing steel, Hi-Carbon",
    url: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf",
    downloadUrl: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf?download=1"
  },
  {
    name: "Medium-Carbon",
    url: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf",
    downloadUrl: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf?download=1"
  },
  {
    name: "Low-Carbon",
    url: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf",
    downloadUrl: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf?download=1"
  },
  {
    name: "SUP9",
    url: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf",
    downloadUrl: "https://pkutz60nrlzs2ks8.public.blob.vercel-storage.com/prsMUwY-FWg1bOChiVKX9QEEvz0yDTZ7Kekul1.pdf?download=1"
  },
];

function ProductDetail() {
  const params = useParams();

  const getProduct = () => {
    const productName = params.productName;

    const product = products.find((pdt) => pdt.name.toLowerCase() == productName.toLowerCase());

    return product;
  };

  if (!getProduct()) return <>404</>;

  return (
    <div className="product-detail-container">
      <iframe src={getProduct().url} width="100%" height="100%" />
    </div>
  );
}

export default ProductDetail;
