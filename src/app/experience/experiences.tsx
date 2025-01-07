import Image from "next/image";

export const experiences = [
    {
        theme: "bg-[#00a89c]",
        logo: <Image className="rounded-lg" src={"/rexit-logo.svg"} alt={"rexit"} width={75} height={0} />,
        company: "Rexit Berhad",
        position: "Full-Stack Developer",
        year: "2024 - present",
        description: [
            "Take lead to innovate the company techstack, focusing on latest Java Spring Boot and React.",
        ],
    },
    {
        theme: "bg-white",
        logo: <Image className="rounded-lg" src={"/ppg.png"} alt={"rexit"} width={250} height={0} />,
        company: "Plaza Premium Group",
        position: "Full-Stack Developer",
        year: "2023 - 2024",
        description: [
            "Primarily interact with Java Spring Boot for backend development with the involvement of AWS services and Docker. Also handled frontend development, working with technologies including React, Angular, React Native, Vue, and Progressive Web Apps (PWA).",
            "Project Involved: Smart Traveller(CMS), Admin Portal, Merchant POS Machine App"
        ],
    }
]