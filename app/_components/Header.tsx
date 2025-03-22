import { StaticImageData } from "next/image"
import Logo from "../_atoms/Logo"
import NavbarRight from "./NavbarRight"
import NavigationLinks from "./NavigationLinks"
import bars from "@/app/_assets/menu.png"
const Header = () => {
    return (
        <header className="bg-white px-[3.4vw] py-[20px] flex items-center justify-between">
            <section className="flex items-center gap-7">
                <img className="lg:hidden" src={bars.src as any} alt="BARS" />
                <Logo />
                <NavigationLinks />
            </section>
            <NavbarRight />
        </header>
    )
}

export default Header