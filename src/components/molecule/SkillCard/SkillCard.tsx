interface SkillCardProps {
    label: string;
    children: React.ReactNode;
    className: string;
}

export const SkillCard = ({label, children, className} : SkillCardProps) => {
    return (
        <div className={`bg-foreground-alt rounded-xl p-[20px] flex flex-col gap-[20px] md:gap-[25px] lg:gap-[30px] ${className}`}>
            <div className="text-[16px] md:text-[18px] lg:text-[20px] text-text font-extrabold text-center">{label}</div>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between gap-y-[30px]">
                {children}
            </div>
        </div>
    )
}