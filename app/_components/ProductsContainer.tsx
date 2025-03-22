import { products } from "../_constants/products"
import ProductItem from "./ProductItem"

const ProductsContainer = () => {
    return (
        <div className="mt-[25px]">
            {products.map(el => (

                <ProductItem product={el} />
            ))}
        </div>
    )
}

export default ProductsContainer