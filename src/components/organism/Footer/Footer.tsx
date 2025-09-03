import { FaRegCopyright } from "react-icons/fa"

export const Footer = () => {
    return (
        <div className="w-full flex justify-center items-center gap-[10px] text-[14px] md:text-[15px] lg:text-[16px] py-[10px] md:py-[15px] lg:py-[20px] border-t-1 border-foreground-alt">
            <FaRegCopyright/>
            2025 Julius Angelo Paano. All rights reserved.
        </div>
    )
}