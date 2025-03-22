import notification from "@/app/_assets/notification.png"
import search from "@/app/_assets/search-normal.png"
import girl from "@/app/_assets/girl.png"
import Image from "next/image"
import Button from "../_atoms/Button"
import { IoAddCircleOutline } from "react-icons/io5";
import global from "@/app/_assets/global.png"
import UsersIcons from "../_atoms/UsersIcons"
import AddProductButton from "../_atoms/AddProductButton"
const NavbarRight = () => {
    return (
        <section className="flex gap-2 ">
            <UsersIcons />
            <section className="max-lg:hidden flex">
                <AddProductButton />
                <section className="flex items-center ml-5 px-2">
                    <img
                        src={global.src}
                        alt="LOCALIZATION"
                        className="cursor-pointer border-[2px] border-transparent border-r-black pr-2 size-[35px] h-[25px] "
                    />
                    <span className="ml-2 cursor-pointer">EN</span>
                </section>
            </section>
        </section>
    )
}




export default NavbarRight