import { StaticImageData } from "next/image";

import img1 from "@/app/_assets/products/303b0368e0a8e19b3f56ae9068708f73.jpg";
import img2 from "@/app/_assets/products/69d4f459bbbc627d952033ad9bbda7bb.jpg";
import img3 from "@/app/_assets/products/7b957b12337436f7b6922a2bef35de37.jpg";
import img4 from "@/app/_assets/products/a868f750e8af9c438d630e0ad2d5357d.jpg";
import img5 from "@/app/_assets/products/b3bf04a5851b3db639ef84c591c167ef.jpg";
import img6 from "@/app/_assets/products/e6c6f653a71f3343ab26fca8d573f90e.jpg";
export interface Product {
  productName: string;
  price: number;
  descountInto: string[];
  img?: StaticImageData;
  discountType: "hotSale" | "liveAuction";
}

export const products: Product[] = [
  {
    productName: "Six-piece clothing set (blouse - pants - hat and",
    price: 1000,
    descountInto: ["2 Days", "10 Hours", "50 minutes"],
    img: img1,
    discountType: "liveAuction",
  },
  {
    productName: "Jeep Car, new, used for only one time",
    price: 1000,
    descountInto: ["2 Days", "10 Hours", "50 minutes"],
    img: img2,
    discountType: "liveAuction",
  },
  {
    productName: "Six-piece clothing set (blouse - pants - hat and",
    price: 1000,
    descountInto: ["2 Days", "10 Hours", "50 minutes"],
    img: img3,
    discountType: "hotSale",
  },
  {
    productName: "Jeep Car, new, used for only one time",
    price: 1000,
    descountInto: ["2 Days", "10 Hours", "50 minutes"],
    img: img4,
    discountType: "liveAuction",
  },
  {
    productName: "Six-piece clothing set (blouse - pants - hat and",
    price: 1000,
    descountInto: ["2 Days", "10 Hours", "50 minutes"],
    img: img5,
    discountType: "liveAuction",
  },
  {
    productName: "Jeep Car, new, used for only one time",
    price: 1000,
    descountInto: ["2 Days", "10 Hours", "50 minutes"],
    img: img6,
    discountType: "liveAuction",
  },
];
