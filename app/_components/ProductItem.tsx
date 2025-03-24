import { Product } from "../_constants/products";
import LikeButton from "../_atoms/LikeButton";
const ProductItem = ({ product }: { product: Product }) => {
    return (
        <section className="flex gap-[16px] p-[8px] ">
            <div className="max-sm:max-w-[87px] max-sm:min-w-[87px] sm:min-w-[145px] sm:max-w-[145px] sm:min-h-[127px] sm:max-h-[127px] max-sm:h-[72px]  relative ">
                <img alt={`${product.productName}`} src={product?.img?.src!} className="rounded-[28px] top-0 left-0 object-cover absolute w-full h-full select-none" />
                <div className="size-[30px] z-[99] relative bg-white rounded-[50%] flex items-center justify-center sm:hidden top-2 left-2">
                    <LikeButton />
                </div>
                <span className={`max-sm:hidden z-[10] absolute w-3/4 max-sm:max-h-[20px] sm:max-h-[30px] sm:min-h-[30px] rounded-tl-[15px] rounded-br-[15px]  max-sm:rounded-br-[50px] max-sm:rounded-tl-[50px] bottom-0 right-0 ${product.discountType === "hotSale" ? "bg-[#FF951D]" : "bg-[#D20653]"} flex items-center justify-center text-white`}> {product.discountType === "hotSale" ? "Hot Sale" : "Live Auction"} </span>
            </div>
            <div className="flex-col flex gap-2 w-full whitespace-nowrap text-ellipsis overflow-x-hidden">
                <h3 className="text-[#333333]  text-sm sm:text-lg flex items-center justify-between">
                    {product.productName}
                    <section className="max-sm:hidden">
                        <LikeButton />
                    </section>
                </h3>
                <p className="text-[#828282] capitalize"> starting price <span className="font-bold text-sm sm:text-2xl text-black">{product.price} EGP</span> </p>
                <div className="flex  gap-2 max-sm:flex-col">
                    <h3 className="text-[#828282] capitalize">Lot starts in</h3>
                    <div className="flex items-center gap-2 ">
                        {product?.descountInto?.map(el => (
                            <LotStarts val={el} />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}
function LotStarts({ val }: { val: string }) {
    return <span className="px-[12px] py-1.5 bg-[#FFF5E9] rounded-xl text-[#FF951D] font-semibold text-xs sm:text-lg"> {val} </span>
}
export default ProductItem