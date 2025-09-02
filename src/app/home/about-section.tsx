import Image from "next/image"

export const AboutSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px] md:gap-[30px] lg:gap-[40px] items-center" id="about">
            <div className="col-span-1 md:col-span-5 flex justify-center">
                <div className="w-[70%] sm:w-[50%] md:w-[90%] aspect-square bg-linear-to-t from-primary-100 to-secondary-100 rounded-full flex justify-center items-center">
                    <Image src="/images/developer/paanoja-casual.jpg" alt="Julius Angelo Paano casual picture" width="500" height="500" className="w-[97%] aspect-square bg-background rounded-full"/>
                </div>
            </div>
            <div className="col-span-1 md:col-span-7 flex flex-col gap-[10px] md:gap-[20px]">
                <div className="flex flex-col">
                <div className="text-[30px] md:text-[38px] lg:text-[45px]/20 text-text font-extrabold text-center md:text-left">About Me</div>
                </div>
                <div className="text-[15px] md:text-[17px] lg:text-[18px] text-center md:text-left text-text font-semibold">
                    I’m Julius Angelo Paano, a Computer Science graduate from the Polytechnic University of the Philippines, based in Mandaluyong City. With a strong foundation in programming and problem-solving, I specialize in creating user-friendly and efficient web applications, while also exploring mobile app development.
                </div>
                <div className="text-[15px] md:text-[17px] lg:text-[18px] text-center md:text-left text-text font-semibold">
                    Passionate about technology, I continuously expand my skills by learning new programming languages, frameworks, and tools. My goal is to build digital solutions that not only function well but also provide great user experiences — and I’m eager to apply my knowledge and grow further in a professional environment.
                </div>
            </div>
         </div>
    )
}