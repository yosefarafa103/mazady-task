import Image from "next/image"
import logo from "@/app/_assets/logo.png"
const Logo = () => {
    return (
        <Image alt="LOGO" src={logo.src} width={108} height={43} />
    )
}

export default Logo