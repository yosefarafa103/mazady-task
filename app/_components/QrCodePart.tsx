"use client"
import BoxContainer from "./BoxContainer"
import eye from "@/app/_assets/eye.png"
import doc from "@/app/_assets/document-download1.png"
import share from "@/app/_assets/send-square.png"
import docOrange from "@/app/_assets/document-download.png"
import Button from "../_atoms/Button"
import qr from "@/app/_assets/c0bf0139958af059103c6b680d1cf1fc.jpg"
import Logo from "../_atoms/Logo"
import arrowDown from "@/app/_assets/arrow-down.png"
import { StaticImageData } from "next/image"
import { MouseEventHandler, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
const QrCodePart = () => {
    const [isCliped, setIsCliped] = useState(false);
    return (
        <BoxContainer>
            <section className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-[#333333]">QR Code</h3>
                <section className="flex items-center gap-[24px] ">
                    {[eye, doc, share, arrowDown].map((el: StaticImageData, idx: number) => (
                        <img
                            onClick={idx === 3 ? (() => setIsCliped(!isCliped)) as MouseEventHandler<HTMLImageElement> : undefined}
                            src={el.src} className={`size-[25px] cursor-pointer ${idx === 3 && `sm:hidden ${isCliped ? "rotate-[180deg] " : ""}`}`} />
                    ))}
                </section>
            </section>
            <AnimatePresence>
                {
                    !isCliped &&
                    <motion.section
                        layout
                        initial={{
                            y: -50,
                            // opacity: 0
                            height: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            height: "auto"
                        }}
                        exit={
                            {
                                y: -50,
                                opacity: 0,
                                height: 0

                            }
                        }
                    >

                        <div className="flex items-center bg-[#FFF5E9] rounded-lg py-[21px] pr-[25px] pl-[19px] gap-2 mb-4">
                            <img src={docOrange.src} className="size-[25px] cursor-pointer" />
                            <span className="text-sm max-md:whitespace-nowrap max-md:text-ellipsis max-md:overflow-x-hidden">
                                Download the QR code or share it with your friends.
                            </span>
                        </div>
                        <Button classname="!p-[20px]">
                            <div className="bg-white min-h-[270px] text-black w-full rounded-2xl flex flex-col gap-1 items-center py-7">
                                <Logo />
                                <h3 className="text-2xl font-semibold ">Hala Ahmed</h3>
                                <img src={qr.src} className="size-[135px] " alt="" />
                                <p className="text-[#363333] text-sm">Follow Us on Mazaady</p>
                            </div>
                        </Button>
                    </motion.section>
                }
            </AnimatePresence>
        </BoxContainer>
    )
}

export default QrCodePart