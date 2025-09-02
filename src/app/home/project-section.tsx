"use client";

import ProjectCard from "@/components/molecule/ProjectCard";
import { useEffect, useState } from "react";
import { DiJava, DiLaravel, DiMysql, DiReact, DiRedis } from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaDocker, FaGithub, FaSass } from "react-icons/fa";
import { RiHtml5Fill, RiJavascriptFill, RiPhpFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAndroidstudio, SiKubernetes, SiNextdotjs, SiWebpack } from "react-icons/si";

interface Project {
    projectName: string;
    projectImage: string;
    projectDescription: string;
    projectCode?: string;
    projectPreview?: string; 
    projectTech: {
        techLogo: React.ElementType;
    } [];
};

const project: Project[] = [
    {
        projectName: "Website Portfolio",
        projectImage: "/images/project/WebsitePortfolio.svg",
        projectDescription: "My personal portfolio website showcasing my introduction, tech stack, projects, professional experience, and contact information.",
        projectCode: "https://github.com/julsangelo/website-portfolio",
        projectPreview: "https://paanojuliusangelo.vercel.app/",
        projectTech: [
            {techLogo: SiNextdotjs},
            {techLogo: RiTailwindCssFill},
        ]
    },
    {
        projectName: "Cliff Motorshop",
        projectImage: "/images/project/CliffMotorshop.svg",
        projectDescription: "A commissioned motorshop website featuring sign-in/sign-up, product ordering, and payments through Xendit, with an admin panel to manage products, orders, and analytics.",
        projectCode: "",
        projectPreview: "https://cliffmotorshop.onrender.com/",
        projectTech: [
            {techLogo: DiLaravel},
            {techLogo: DiReact},
            {techLogo: FaSass},
            {techLogo: SiWebpack},
            {techLogo: DiMysql},
            {techLogo: DiRedis},
            {techLogo: FaGithub},
            {techLogo: FaDocker},
        ]
    },
    {
        projectName: "MotionRX",
        projectImage: "/images/project/MotionRX.svg",
        projectDescription: "A physical therapy clinic website where I updated frontend and backend content (accredited-by section on the homepage, footer info, and contact page details including location and FAQ) through a CMS developed by another team, and fixed cross-browser inconsistencies between Chrome and Firefox.",
        projectCode: "",
        projectPreview: "https://motionrx.com.ph/",
        projectTech: [
            {techLogo: DiLaravel},
            {techLogo: DiReact},
            {techLogo: FaSass},
            {techLogo: SiWebpack},
            {techLogo: DiMysql},
            {techLogo: DiRedis},
            {techLogo: FaGithub},
            {techLogo: FaDocker},
        ]
    },
    {
        projectName: "PlayVault",
        projectImage: "/images/project/PlayVault.svg",
        projectDescription: "A project I built during my training period at my previous company, where I worked with a new tech stack for the first time (except React and Git).",
        projectCode: "https://github.com/julsangelo/games",
        projectPreview: "",
        projectTech: [
            {techLogo: DiLaravel},
            {techLogo: DiReact},
            {techLogo: FaSass},
            {techLogo: SiWebpack},
            {techLogo: DiMysql},
            {techLogo: DiRedis},
            {techLogo: FaGithub},
            {techLogo: FaDocker},
            {techLogo: SiKubernetes},
        ]
    },
    {
        projectName: "MedicKare",
        projectImage: "/images/project/MedicKare.svg",
        projectDescription: "An online appointment scheduling website developed as a final requirement for Software Engineering and Web Development, allowing users to book hassle-free medical consultations.",
        projectCode: "https://github.com/julsangelo/medickare",
        projectPreview: "",
        projectTech: [
            {techLogo: RiHtml5Fill},
            {techLogo: RiPhpFill},
            {techLogo: RiJavascriptFill},
            {techLogo: FaCss3Alt},
            {techLogo: FaBootstrap},
            {techLogo: DiMysql},
        ]
    },
    {
        projectName: "HospiTrack",
        projectImage: "/images/project/HospiTrack.svg",
        projectDescription: "HospiTrack is an Android app I built in my third year that suggests nearby hospitals based on the user’s location and provides details such as whether they accept COVID-19 patients.",
        projectCode: "https://github.com/julsangelo/hospitrack",
        projectPreview: "https://appetize.io/app/w2gd6qqq6osrwttluceorjf7su?device=pixel7&osVersion=13.0",
        projectTech: [
            {techLogo: SiAndroidstudio},
            {techLogo: DiJava}
        ]
    },
    {
        projectName: "Mobyte",
        projectImage: "/images/project/Mobyte.svg",
        projectDescription: "A malware detection mobile app developed for our thesis, using parallel machine learning algorithms (OneR and J48) via WEKA to identify malicious APKs.",
        projectCode: "https://github.com/julsangelo/mobyte",
        projectPreview: "https://appetize.io/app/m6cbaqdmmkveszheeu4szvosoe?device=pixel7&osVersion=13.0",
        projectTech: [
            {techLogo: SiAndroidstudio},
            {techLogo: DiJava}
        ]
    }
]

export const ProjectSection = () => {
  
    const [page, setPage] = useState(0);
    const [projectsPerPage, setProjectsPerPage] = useState(3);
    const [startX, setStartX] = useState<number | null>(null);

    useEffect(() => {
        const updateProjectsPerPage = () => {
        if (window.innerWidth < 640) {
            setProjectsPerPage(1);
        } else if (window.innerWidth < 1280) {
            setProjectsPerPage(2);
        } else {
            setProjectsPerPage(3);
        }
        setPage(0);
        };

        updateProjectsPerPage();
        window.addEventListener("resize", updateProjectsPerPage);

        return () => window.removeEventListener("resize", updateProjectsPerPage);
    }, []);

    const totalPages = Math.ceil(project.length / projectsPerPage);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX === null) return;
        const endX = e.changedTouches[0].clientX;
        const deltaX = endX - startX;

        if (deltaX > 50 && page > 0) {
            setPage(page - 1);
        } else if (deltaX < -50 && page < totalPages - 1) {
            setPage(page + 1);
        }
        setStartX(null);
    };

    return (
        <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] items-center">
            <div className="text-[30px] md:text-[38px] lg:text-[45px]/20 text-text font-extrabold">
                Projects
            </div>
            <div className="flex flex-col gap-[10px] items-center w-full">
                <div
                className="overflow-hidden w-full"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                        transform: `translateX(-${page * 100}%)`,
                        }}
                    >
                        {project.map((project, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0"
                                style={{
                                width: `${100 / projectsPerPage}%`,
                                }}
                            >
                                <ProjectCard
                                    key={index}
                                    name={project.projectName}
                                    image={project.projectImage}
                                    description={project.projectDescription}
                                    code={project.projectCode}
                                    preview={project.projectPreview}
                                    tech={project.projectTech}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-3 mt-4">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setPage(index)}
                            className={`h-[10px] sm:h-[12px] rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
                                page === index ? "bg-primary-100 w-[25px]" : "bg-background-alt w-[10px] sm:w-[12px]"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}