"use client"
import useProductsStore from "../_stores/ProductsStore"
import AddProductForm from "./AddProductForm"
import ProductItem from "./ProductItem"
const ProductsContainer = () => {
    const products = useProductsStore(s => s.products)
    const hasButtonInScreen = useProductsStore(s => s.hasButtonInScreen)
    return (
        <>
            {hasButtonInScreen ?
                <div className="mt-[25px]">
                    {products.map(el => (
                        <ProductItem product={el} />
                    ))}
                </div>
                :
                <AddProductForm />
            }
        </>
    )
}

export default ProductsContainer