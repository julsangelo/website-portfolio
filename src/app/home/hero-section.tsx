import Button from "@/components/atom/Button"
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[45px] lg:gap-[60px] items-center">
            <div className="col-span-1 md:col-span-7 flex flex-col gap-[15px] md:gap-[20px] order-2 md:order-1 text-center md:text-left">
                <div className="flex flex-col">
                    <div className="text-[18px] lg:text-[20px] text-text font-bold">Hi! I am</div>
                    <div className="text-[23px] lg:text-[25px] text-primary-100 font-bold">Julius Angelo</div>
                    <div className="text-[40px]/12 lg:text-[60px]/20 text-text font-extrabold">Software Developer</div>
                </div>
                <div className="text-[15px] lg:text-[18px] text-text font-semibold">
                    From academic projects to personal builds, this portfolio highlights my skills and growth as a software developer.
                </div>
                <div className="flex justify-center md:justify-start">
                    <Button label="Hire Me" href="#contact"/>
                </div>
            </div>
            <div className="col-span-1 md:col-span-5 flex flex-col gap-[20px] items-center order-1 md:order-2">
                <div className="w-[70%] sm:w-[50%] md:w-[90%] aspect-square bg-linear-to-t from-primary-100 to-secondary-100 rounded-full flex justify-center items-center">
                    <div className="w-[97%] aspect-square bg-background rounded-full relative">
                        <Image src="/images/developer/paanoja.png" alt="Julius Angelo Paano photo" width="500" height="500" className="w-full absolute bottom-0 rounded-full"/>
                    </div>
                </div>
                <div className="flex items-center gap-[20px]">
                    <Link href="https://www.facebook.com/juliusangelo.a.paano" target="_blank" className="text-[35px] md:text-[40px]">
                        <Facebook fontSize="inherit" className="text-text hover:text-primary-100"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/paanoja/" target="_blank" className="text-[35px] md:text-[40px]">
                        <LinkedIn fontSize="inherit" className="text-text hover:text-primary-100"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/paanoja/" target="_blank" className="text-[30px] md:text-[35px]">
                        <GitHub fontSize="inherit" className="text-text hover:text-primary-100"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}