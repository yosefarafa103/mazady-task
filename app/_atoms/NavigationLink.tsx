import Link from "next/link"
import navLinkStyle from "@/app/_atoms/_atoms_styles/NavLink.module.css"

const NavigationLink = ({ href, isActiveLink }: { href: string, isActiveLink: boolean }) => {
    return (
        <Link href={`${"/"}`} className={`capitalize text-[#828282] leading-[50px] text-lg relative after:absolute after:w-full after:rounded-tr-[15px] after:rounded-tl-[15px] after:-bottom-5 after:left-0 after:h-[6px] after:bg-[#d20653] after:opacity-0 hover:text-[#d20653] hover:after:opacity-[1] px-[10px] ${navLinkStyle.navLink} ${isActiveLink && "text-[#d20653] after:opacity-[1]"}`}>{href}</Link>
    )
}

export default NavigationLink