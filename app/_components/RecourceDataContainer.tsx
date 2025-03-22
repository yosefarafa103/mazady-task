"use client";
import useNavRecources from "@/app/_stores/NavRecourcesStore"
const RecourceDataContainer = () => {
    const currentTab = useNavRecources((s) => s.currentTab)
    return (
        <>
            <div className="font-semibold text-xl">{["Products", "Articales", "Reviews"][currentTab]} </div>
        </>
    )
}
export default RecourceDataContainer