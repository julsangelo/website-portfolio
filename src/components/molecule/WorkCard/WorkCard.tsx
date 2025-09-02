interface WorkCardProps {
    time: string;
    title: string;
    company: string;
    description: string;
    isEven: boolean
}

export const WorkCard = ({time, title, company, description, isEven} : WorkCardProps) => {
    return (
        <div className={`col-span-6 md:col-span-3 flex flex-col gap-[10px] order-2 ${isEven ? "md:order-1 justify-self-end" : "md:order-3"}`}>
            <div className="flex md:hidden bg-primary-100 px-[10px] py-[5px] rounded-full text-[14px] w-fit">{time}</div>
            <div className="w-full md:max-w-[400px] bg-foreground-alt p-[15px] rounded-xl flex flex-col gap-[10px]">
                <div>
                    <div className={`text-[18px] text-primary-100 font-bold ${isEven ? "md:text-right" : "md:text-left"}`}>{title}</div>
                    <div className={`text-[16px] text-text font-semibold ${isEven ? "md:text-right" : "md:text-left"}`}>{company}</div>
                </div>
                <div className={`text-[15px] text-text ${isEven ? "md:text-right" : "md:text-left"}`}>{description}</div>
            </div>
        </div>
    )
}