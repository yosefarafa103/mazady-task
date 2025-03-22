"use client"

import { useState } from "react"
import { CiHeart } from "react-icons/ci"
import { FaHeart } from "react-icons/fa"
const LikeButton = () => {
    const [isLike, setIsLike] = useState<boolean>(false)
    return (
        <>
            {isLike ?
                <FaHeart onClick={() => setIsLike(!isLike)} className={`text-lg cursor-pointer text-[#D20653]`} /> :
                <CiHeart onClick={() => setIsLike(!isLike)} className={`text-2xl cursor-pointer `} />
            }
        </>
    )
}

export default LikeButton