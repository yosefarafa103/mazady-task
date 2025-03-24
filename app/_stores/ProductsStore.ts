import { create } from "zustand";
import { Product, products as productList } from "../_constants/products";

interface ProductsStoreType {
  products: Product[];
  hasButtonInScreen: boolean;
  pushNewProduct?: (val: any) => Product[];
  setViewButton?: () => void;
}

export const ProductsStore = create<ProductsStoreType>((set, get) => ({
  products: productList,
  hasButtonInScreen: true,
  setViewButton: () => {
    set({ hasButtonInScreen: !get().hasButtonInScreen });
  },
  pushNewProduct: (val: Product) => {
    let arr = get().products;
    arr.push(val);
    set({ products: arr });
    return arr;
  },
}));

export default ProductsStore;
