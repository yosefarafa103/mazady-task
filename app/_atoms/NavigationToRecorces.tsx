"use client";
import useNavRecources from "@/app/_stores/NavRecourcesStore"
import Button from "./Button";
import AddProductButton from "./AddProductButton";
const NavigationToRecorces = () => {
    const currentTab = useNavRecources((s) => s.currentTab)
    const setCurrentTab = useNavRecources((s) => s.setCurrentTab)
    return (
        <div className="flex mb-5 justify-between">
            <section className="flex items-center gap-2.5">
                {["Products", "Articales", "Reviews"].map((tab: string, index: number) => (
                    <button onClick={() => setCurrentTab(index)} key={tab} className={`${index === currentTab ? "bg-[#FFF5E9] !border-[#FF951D] font-semibold" : "bg-white border-[#E0E0E0] text-[#828282] "} border-2 border-solid rounded-[18px] text-lg max-sm:text-sm px-8 py-3 max-sm:px-4 cursor-pointer`}> {tab} </button>
                ))}
            </section>
            <section className="max-xl:hidden">
                <AddProductButton isFull={false} />
            </section>
        </div>
    )
}

export default NavigationToRecorces