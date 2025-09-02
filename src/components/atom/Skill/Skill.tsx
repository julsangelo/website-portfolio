interface SkillProp {
    logo: React.ElementType;
    label: string;
}

export const Skill = ({logo: Logo, label} : SkillProp) => {
    return (
        <div className="col-span-1 flex flex-col items-center">
            <Logo className="size-[45px]"/>
            <div className="text-[12px] md:text-[14px] lg:text-[15px] font-semibold text-center">{label}</div>
        </div>
    )
}