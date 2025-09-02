import Skill from "@/components/atom/Skill"
import SkillCard from "@/components/molecule/SkillCard"
import { DiJava, DiLaravel, DiMysql, DiReact, DiRedis } from "react-icons/di"
import { FaBootstrap, FaCss3Alt, FaDocker, FaGithub, FaSass, FaShopify } from "react-icons/fa"
import { RiHtml5Fill, RiJavascriptFill, RiPhpFill, RiTailwindCssFill } from "react-icons/ri"
import { SiAndroidstudio, SiKubernetes, SiNextdotjs, SiWebpack } from "react-icons/si"

interface Skill {
    skillCategory: string;
    skills: {
        skillLogo: React.ElementType;
        skillName: string;
    } [];
}

const skill: Skill[] = [
    {
    skillCategory: "Programming Language",
        skills: [
            { skillLogo: RiJavascriptFill, skillName: "JavaScript" },
            { skillLogo: RiPhpFill, skillName: "PHP" },
            { skillLogo: DiJava, skillName: "Java" },
        ],
    },
    {
        skillCategory: "Web Development",
        skills: [
            { skillLogo: DiReact, skillName: "React" },
            { skillLogo: DiLaravel, skillName: "Laravel" },
            { skillLogo: SiNextdotjs, skillName: "Next.js" },
            { skillLogo: RiTailwindCssFill, skillName: "Tailwind" },
            { skillLogo: FaSass, skillName: "SASS" },
            { skillLogo: RiHtml5Fill, skillName: "HTML" },
            { skillLogo: FaCss3Alt, skillName: "CSS" },
            { skillLogo: SiWebpack, skillName: "Webpack" },
            { skillLogo: FaShopify, skillName: "Shopify" },
            { skillLogo: FaBootstrap, skillName: "Bootstrap" },
        ],
    },
    {
        skillCategory: "Mobile Development",
        skills: [
            { skillLogo: DiReact, skillName: "React Native" },
            { skillLogo: SiAndroidstudio, skillName: "Android Studio" },
        ],
    },
    {
        skillCategory: "Database",
        skills: [
            { skillLogo: DiMysql, skillName: "MySQL" },
            { skillLogo: DiRedis, skillName: "Redis" },
        ],
    },
    {
        skillCategory: "Tools & Technologies",
        skills: [
            { skillLogo: FaGithub, skillName: "Git" },
            { skillLogo: FaDocker, skillName: "Docker" },
            { skillLogo: SiKubernetes, skillName: "Kubernetes" },
        ],
    },
]

export const TechStackSection = () => {
    return (
        <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] items-center">
            <div className="text-[30px] md:text-[38px] lg:text-[45px]/20 text-text font-extrabold">Tech Stack</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[25px] lg:gap-[30px] w-full">
                {skill.map((category, index) => {
                    const isLast = index === skill.length - 1;

                    return (
                        <SkillCard label={category.skillCategory} key={index} className={isLast ? "col-span-1 md:col-span-2 w-full md:max-w-[calc(50%-15px)] m-auto" : "col-span-1"}>
                            {category.skills.map((skill, index) => (
                                <Skill label={skill.skillName} logo={skill.skillLogo} key={index}></Skill>
                            ))}
                        </SkillCard>
                    )
                })}
            </div>
        </div>
    )
}