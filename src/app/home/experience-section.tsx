import WorkCard from "@/components/molecule/WorkCard";

interface Experience {
    workTime: string;
    workTitle: string;
    workCompany: string;
    workDescription: string;
};

const experience: Experience[] = [
    {
        workTime: "January 2025 - September 2025",
        workTitle: "Software Implementation Engineer",
        workCompany: "Telostaff LLC",
        workDescription: "I was deployed to a US-based company, PERQ, where I added call-to-action buttons linking to our multifamily marketing automation product on client websites. I also managed website content updates for property management clients using a content management system and implemented SEO improvements to increase visibility.",
    },
    {
        workTime: "June 2024 - September 2024",
        workTitle: "Full Stack Web Developer",
        workCompany: "Leekie Enterprises Inc.",
        workDescription: "I was trained on the team’s tech stack, which included React, Laravel, SCSS, Webpack, Redis, Git, Docker, and Kubernetes. I contributed by making frontend changes to the team’s projects and creating APIs for the backend, while following the Kanban framework in agile development. I also collaborated with different teams working on the same projects that our team managed or developed.",
    },
    {
        workTime: "March 2023 - July 2023",
        workTitle: "Shopify and Web Developer",
        workCompany: "Freelance",
        workDescription: "I was responsible for redesigning and maintaining a US client’s multiple e-commerce websites on the Shopify platform, including redesigning a Shopify store based on a client-provided website using Liquid, and handling the front-end redesign of another client’s business website using HTML, Bootstrap, and JavaScript.",
    },
    {
        workTime: "August 2022 - September 2022",
        workTitle: "Mobile Development Intern",
        workCompany: "Wedding Suppliers Association of the Philippines",
        workDescription: "I was assigned to lead the team of mobile development interns, enhancing the company’s existing Android mobile application while also being tasked to develop the app for iOS devices.",
    },
]

export const ExperienceSection = () => {
    return (
        <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] items-center" id="experience">
            <div className="text-[30px] md:text-[38px] lg:text-[45px]/20 text-text font-extrabold">Work Experience</div>
            <div className="flex flex-col gap-[20px]">
                {experience.map((work, index) => {
                const isEven = (index % 2) === 0;
                const isLast =  index === experience.length - 1;

                return (
                    <div className="grid grid-cols-7 w-full" key={index}>
                        <div className={`hidden col-span-3 h-full w-full md:flex items-center ${isEven ? "order-3 justify-start" : "order-1 justify-end"}`}>
                            <div className="bg-primary-100 px-[10px] py-[5px] rounded-full text-[14px]">{work.workTime}</div>
                        </div>
                        <div className="col-span-1 order-2 w-full h-full flex justify-center items-center relative">
                            <div className="h-fit p-[5px] aspect-square rounded-full bg-background border-dashed border-2 border-background-alt z-50">
                                <div className={`h-[20px] aspect-square rounded-full ${isEven ? "bg-background-alt" : 'bg-primary-100'}`}></div>
                            </div>
                            <div className="w-[50%] md:w-full absolute right-0">
                                <div className="custom-horizontal-dashed"></div>
                            </div>
                            <div className={`absolute ${ index === 0 ? "h-[50%] self-end" : isLast ? "h-[50%] self-start" : "h-full"}`}>
                                <div className="custom-vertical-dashed"></div>
                            </div>
                        </div>
                        <WorkCard time={work.workTime} title={work.workTitle} company={work.workCompany} description={work.workDescription} key={index} isEven={isEven}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}