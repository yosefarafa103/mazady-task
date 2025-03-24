"use client";
import useProductsStore from "@/app/_stores/ProductsStore"
import Button from "../_atoms/Button";
import { useEffect, useMemo, useState } from "react";
import { Product } from "../_constants/products";
interface Categories<T = SubCategories> {
    category: string;
    value: string;
    subcategories: T[]
}
interface SubCategories {
    subcategory: string;
    value: string
}
const AddProductForm = () => {
    const [currentSelect, setCurrentSelect] = useState<number | null>(0)
    const [subSelect, setSubSelect] = useState<SubCategories | null>()
    const [otherVal, setOtherVal] = useState<string | null>()
    const { products } = useProductsStore(s => s)
    const setViewButton = useProductsStore(s => s.setViewButton)
    const pushNewProduct = useProductsStore(s => s.pushNewProduct)!
    useEffect(() => {
    }, [products]);
    const categoriesArr: Categories<SubCategories>[] = useMemo(() => [
        {
            category: "إلكترونيات",
            value: "electronics",
            subcategories: [
                { subcategory: "هواتف", value: "phones" },
                { subcategory: "لابتوبات", value: "laptops" },
                { subcategory: "أجهزة لوحية", value: "tablets" },
                { subcategory: "سماعات", value: "headphones" },
                { subcategory: "كاميرات", value: "cameras" },
                { subcategory: "أجهزة منزلية", value: "home_appliances" },
            ],
        },
        {
            category: "أزياء",
            value: "fashion",
            subcategories: [
                { subcategory: "ملابس رجالية", value: "mens_clothing" },
                { subcategory: "ملابس نسائية", value: "womens_clothing" },
                { subcategory: "أحذية رجالية", value: "mens_shoes" },
                { subcategory: "أحذية نسائية", value: "womens_shoes" },
                { subcategory: "إكسسوارات", value: "accessories" },
                { subcategory: "ساعات", value: "watches" },
            ],
        },
        {
            category: "السيارات",
            value: "automobiles",
            subcategories: [
                { subcategory: "سيارات جديدة", value: "new_cars" },
                { subcategory: "سيارات مستعملة", value: "used_cars" },
                { subcategory: "دراجات نارية", value: "motorcycles" },
                { subcategory: "إكسسوارات السيارات", value: "car_accessories" },
                { subcategory: "قطع غيار", value: "car_parts" },
            ],
        },
        {
            category: "المنزل والحديقة",
            value: "home_garden",
            subcategories: [
                { subcategory: "أثاث", value: "furniture" },
                { subcategory: "ديكور", value: "decor" },
                { subcategory: "أدوات المطبخ", value: "kitchen_tools" },
                { subcategory: "معدات الحدائق", value: "garden_tools" },
                { subcategory: "الإضاءة", value: "lighting" },
            ],
        },
        {
            category: "الألعاب والهوايات",
            value: "toys_hobbies",
            subcategories: [
                { subcategory: "ألعاب الأطفال", value: "kids_toys" },
                { subcategory: "ألعاب الفيديو", value: "video_games" },
                { subcategory: "أدوات الرسم", value: "art_supplies" },
                { subcategory: "ألعاب الطاولة", value: "board_games" },
                { subcategory: "المجسمات", value: "figures_models" },
            ],
        },
        {
            category: "المستلزمات الرياضية",
            value: "sports",
            subcategories: [
                { subcategory: "معدات الجيم", value: "gym_equipment" },
                { subcategory: "ملابس رياضية", value: "sports_clothing" },
                { subcategory: "أحذية رياضية", value: "sports_shoes" },
                { subcategory: "معدات التخييم", value: "camping_gear" },
                { subcategory: "الدراجات", value: "bicycles" },
            ],
        },
        {
            category: "الكتب والموسيقى",
            value: "books_music",
            subcategories: [
                { subcategory: "كتب وروايات", value: "books" },
                { subcategory: "أدوات موسيقية", value: "musical_instruments" },
                { subcategory: "أقراص موسيقية", value: "music_cds" },
                { subcategory: "أفلام ومسلسلات", value: "movies_tv" },
                { subcategory: "كتب تعليمية", value: "educational_books" },
            ],
        },
        {
            category: "الصحة والجمال",
            value: "health_beauty",
            subcategories: [
                { subcategory: "منتجات العناية بالبشرة", value: "skincare" },
                { subcategory: "مستحضرات التجميل", value: "cosmetics" },
                { subcategory: "منتجات العناية بالشعر", value: "haircare" },
                { subcategory: "مكملات غذائية", value: "supplements" },
                { subcategory: "العطور", value: "perfumes" },
            ],
        },
        {
            category: "الخدمات",
            value: "services",
            subcategories: [
                { subcategory: "تصميم جرافيك", value: "graphic_design" },
                { subcategory: "تصوير فوتوغرافي", value: "photography" },
                { subcategory: "خدمات البرمجة", value: "programming_services" },
                { subcategory: "استشارات قانونية", value: "legal_consulting" },
                { subcategory: "دورات تعليمية", value: "online_courses" },
            ],
        },
    ], []);
    const subCategory: Categories[] = useMemo(() => {
        return categoriesArr.filter(el => el.value === categoriesArr[currentSelect as number]?.value)
    }, [currentSelect])
    return (
        <>
            <form className="flex flex-col gap-3">
                <section>
                    <select onChange={(e) => {
                        setCurrentSelect(Number(e.target.value));
                    }} name="category" className="rounded-md px-2 py-3 border-2 border-[#eee] ">
                        {categoriesArr.map((el, i) => (
                            <option value={i}>{el.value}</option>
                        ))}
                        <option value={"other"}> other </option>
                    </select>
                    <select onChange={(e) => {
                        setSubSelect(subCategory[0].subcategories[Number(e.target.value)]);
                    }} name="sub-category" className="rounded-md ml-4 px-2 py-3 border-2 border-[#eee] ">
                        {subCategory[0]?.subcategories?.map((el, i) => (
                            <option value={i}>{el.value}</option>
                        ))}
                        <option value={"other"}> other </option>
                    </select>
                    {!categoriesArr[currentSelect as number] &&
                        <section className="mt-3 mb-2">
                            <input onChange={(e) => setOtherVal(e.target.value)} type="text" placeholder="Add Custom Product" className="rounded-md px-2 py-3 border-2 border-[#eee] " />
                        </section>
                    }
                </section>
            </form>
            <Button classname="my-3" handlerFn={() => pushNewProduct(!(currentSelect && subSelect) ? { productName: otherVal } : { productName: `${categoriesArr[currentSelect as number].value} ${subSelect?.value}`, price: 1000 })}>Submit</Button>
            <section className="my-10  p-3">
                {products?.map((e: Product) => (
                    <div className="bg-zinc-100 mb-3 p-2" key={e.img?.src}>{e.productName} </div>
                ))}
            </section>
            <Button isFullWidth={false} handlerFn={setViewButton}>Back To Products</Button>
        </>
    )
};

export default AddProductForm;
