import { MdEmail, MdLocalPhone } from "react-icons/md";

interface Contact {
    contactParagraph: string;
    contactInfo: {
        contactLogo: React.ElementType;
        contactText: string;
        contactValue: string;
    } [];
}

const contact: Contact = {
    contactParagraph: "Feel free to reach out if you’d like to collaborate, have a project in mind, or just want to connect. You can contact me directly via email or phone, and I’ll get back to you as soon as possible.",
    contactInfo: [
        {
            contactLogo: MdEmail,
            contactText: "paano14325@gmail.com",
            contactValue: "mailto:paano14325@gmail.com",
        },
        {
            contactLogo: MdLocalPhone,
            contactText: "+63 939 730 4644",
            contactValue: "tel:+639397304644",
        }
    ]
}

export const ContactSection = () => {
    return (
        <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] items-center">
            <div className="text-[30px] md:text-[38px] lg:text-[45px]/20 text-text font-extrabold">Contact</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[30px] max-w-[1000px] items-center">
                <div className="col-span-1 text-[15px] md:text-[16px] lg:text-[17px] text-center md:text-right font-semibold">
                    {contact.contactParagraph}
                </div>
                <div className="col-span-1 flex flex-col gap-[10px] md:gap-[20px] items-center md:items-start">
                    {contact.contactInfo.map((contact, index) => (
                        <a href={contact.contactValue} key={index} className="text-[15px] md:text-[16px] w-fit md:w-full flex items-center gap-[10px] bg-foreground-alt p-[20px] rounded-2xl hover:bg-primary-100 hover:text-background transition-all delay-[300] ease-in-out">
                            <contact.contactLogo className="size-[25px] md:size-[30px]"/>
                            {contact.contactText}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}