import Image from "next/image"

interface ProjectCardProps {
    name: string;
    image: string;
    description: string;
    code?: string;
    preview?: string;
    tech: { 
        techLogo: React.ElementType 
    } [];
}

export const ProjectCard = ({name, image, description, code, preview, tech} : ProjectCardProps) => {
    return (
        <div className="col-span-1 md:col-span-1 xl:col-span-1 w-full overflow-hidden rounded-xl relative px-[10px]">
            <Image src={`${image}`} alt="" height="1000" width="1000" className="w-full rounded-xl object-cover object-top aspect-[1/1.7] xxs:h-[510px] sm:h-[570px] md:h-[500px] lg:h-[530px] xl:h-[600px]"/>
            <div className="w-[calc(100%-20px)] h-fit p-[15px] flex flex-col rounded-xl gap-[25px] absolute bottom-0 bg-gradient-to-t from-foreground-alt to-transparent">
                <div className="flex flex-col gap-[20px]">
                    <div>
                        <div className="text-[18px] text-text font-bold">{name}</div>
                        <div className="text-[14px]">{description}</div>
                    </div>
                    <div className="w-full h-[1px] bg-text opacity-50"></div>
                    <div className="flex gap-[5px]">
                        {tech.map((tech, index) => {
                            const Logo = tech.techLogo;

                            return (
                                <Logo className="size-[25px]" key={index}/>
                            )
                        })}
                    </div>
                </div>
                <div className="flex gap-[10px] w-full">
                    {code && (
                        <a
                            href={`${code}`}
                            target="_blank"
                            className={`w-full relative inline-block text-[14px] font-bold rounded-[8px] py-[5px] cursor-pointer border overflow-hidden group text-center border-primary-100 ${preview ? "bg-background text-primary-100 hover:border-secondary-100" : "bg-primary-100 text-background hover:border-background-alt"}`}>
                            <span className={`absolute inset-0 w-0 transition-all duration-300 ease-out group-hover:w-full ${preview ? "bg-secondary-100" : "bg-background-alt"}`}></span>
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-text-alt">
                                Code
                            </span>
                        </a>
                    )}
                    {preview && (
                        <a
                            href={`${preview}`}
                            target="_blank"
                            className="w-full relative inline-block text-[14px] font-bold rounded-[8px] py-[5px] cursor-pointer border overflow-hidden group text-center bg-primary-100 text-background border-primary-100 hover:border-background-alt">
                            <span className="absolute inset-0 w-0 transition-all duration-300 ease-out bg-background-alt group-hover:w-full"></span>
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-text-alt">
                                Preview
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}