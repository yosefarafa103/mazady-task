import Image from "next/image"
import notification from "../_assets/notification.png"
import search from "../_assets/search-normal.png"
import girl from "../_assets/girl.png"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

const UsersIcons = () => {
    return (
        <div className="flex gap-2 items-center">
            <RightNavItem>
                <DropdownMenu>
                    <DropdownMenuTrigger >
                        <Image
                            src={search.src}
                            width={25}
                            height={20}
                            alt="SEARCH"
                        />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent >
                        <DropdownMenuItem>1</DropdownMenuItem>
                        <DropdownMenuItem>2</DropdownMenuItem>
                        <DropdownMenuItem>3</DropdownMenuItem>
                        <DropdownMenuItem>4</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </RightNavItem>
            <RightNavItem>
                <img
                    src={notification.src}
                    alt="NOTIFICATION"
                    className=" size-[30px] max-sm:size-[20px] "
                />
            </RightNavItem>
            <img
                src={girl.src}
                className="mx-3 size-[35px] cursor-pointer"
                alt="USER"
            />
        </div>
    )
}
function RightNavItem({ children }: { children: React.ReactNode }) {
    return (
        <span className="size-[50px] flex items-center justify-center border-[2px] border-transparent lg:border-r-[#FFEAD2] pr-3 md:pr-5 cursor-pointer">
            {children}
        </span>
    )
}
export default UsersIcons