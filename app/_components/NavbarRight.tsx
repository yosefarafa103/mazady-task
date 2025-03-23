import global from "../_assets/global.png"
import UsersIcons from "../_atoms/UsersIcons"
import AddProductButton from "../_atoms/AddProductButton"
const NavbarRight = () => {
    return (
        <nav className="flex gap-2 ">
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
        </nav>
    )
}




export default NavbarRight