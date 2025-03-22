"use client"
import profile from "@/app/_assets/2d50fb172fe960160bb083cc04daa842.jpg"
import BoxContainer from "./BoxContainer"
import followingNumber from "@/app/_assets/user-tick.png"
import { StaticImageData } from "next/image";
import followers from "@/app/_assets/profile-2user.png"
import rating from "@/app/_assets/magic-star.png"
import Button from "../_atoms/Button";
import { user, userData } from "../_constants/user";
import { handelFollowingUser } from "../_utils/handleFollowing";
import userStore from "../_stores/UserStore";
import { useCallback, useEffect } from "react";
interface PersonDetail {
    icon: StaticImageData;
    number: number;
    title: string;
    rating?: number;
    userData?: number
}
const PersonProfileInfo = () => {
    const userDetails: PersonDetail[] = [{ icon: followingNumber, number: user.following, title: "Following", }, { icon: followers, number: user.followers, title: "Followers", }, { icon: rating, number: 23, title: "Rating", rating: 15 }]
    const isFollwoing = userStore((state) => state.isFollwing);
    const setisFollwing = userStore((state) => state.setFollowing);
    const isPending = userStore((state) => state.isPending);
    const followerNumber = userStore((state) => state.followersNumber)!;
    const followUser = useCallback(async () => {
        await handelFollowingUser(followerNumber)
    }, [isFollwoing, followerNumber])
    return (
        <BoxContainer>
            <div className="flex flex-col gap-3">
                <img
                    src={profile.src}
                    className="object-cover size-[100px] rounded-[24px] "
                />
                <section className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold ">
                        {user.username}
                    </h3>
                    <p className="text-[#4F4F4F] text-[16px] ">
                        {user.description}
                    </p>
                </section>
            </div>
            <section className="flex gap-2 items-center my-5">
                {userDetails.map((el) => (
                    <PersonDetail userData={followerNumber} key={el.title} rating={el.rating} number={el.number} title={el.title} icon={el.icon} />
                ))}
            </section>
            <Button classname={`${isFollwoing && "pointer-events-none opacity-[0.5] "}`} handlerFn={followUser}>
                {isPending === true ? `Follwing ${user.username}...` : isFollwoing ? "Follwing" : "Follow"}
            </Button>
        </BoxContainer>
    )
}

function PersonDetail({ icon, title, number, rating, userData }: PersonDetail) {
    return (
        <section className="bg-[#FFF5E9] rounded-lg py-3 pl-2 pr-[20px] lg:flex-1 flex items-center gap-2 w-full">
            <img className="size-[24px]" src={icon.src} alt="" />
            <div className="flex flex-col gap-1">
                <h5 className="font-semibold text-sm"> {number} {rating && <span className="ml-2 inline-flex text-xs text-[#828282]"> ({rating}) </span>} </h5>
                <h4 className="text-[#FF951D] text-sm"> {title} </h4>
            </div>
        </section>
    )
}
export default PersonProfileInfo