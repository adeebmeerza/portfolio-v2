import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experiences: {
  period: string;
  position: string;
  company: {
    name: string;
    logo: string;
    url: string;
    style: { bg: string; text: string };
  };
  summary: string;
}[] = [
  {
    period: "June 2023 - 2024",
    position: "Backend Engineer",
    company: {
      name: "Aerodyne",
      logo: "/aerodyne.svg",
      url: "https://aerodyne.group/",
      style: {
        bg: "bg-[#6db643]/5",
        text: "text-[#6db643]",
      },
    },
    summary:
      "Collaborate on the development of microservices of an AI-driven SaaS aerial imaging super-platform for critical industry.",
  },
  {
    period: "Jan 2022 - May 2023",
    position: "Software Developer",
    company: {
      name: "Synapse Innovation",
      logo: "/synapse.svg",
      url: "https://www.linkedin.com/company/synapse-my/",
      style: {
        bg: "bg-[#9c0459]/5",
        text: "text-[#9c0459]",
      },
    },
    summary:
      "In charged of building aerial images processer and manager while maintaining existing desktop application and web page.",
  },
  {
    period: "2020",
    position: "Intern, Software Development",
    company: {
      name: "Synapse Innovation",
      logo: "/synapse.svg",
      url: "https://www.linkedin.com/company/synapse-my/",
      style: {
        bg: "bg-[#9c0459]/5",
        text: "text-[#9c0459]",
      },
    },
    summary:
      "Assigned to research and develop a desktop, block-based programming editor for early ages robotic learning kits.",
  },
];

const Experiences = () => {
  return (
    <section className="wrapper" id="experiences">
      <h2>Work Experiences</h2>

      <div>
        {experiences.map((exp) => (
          <Link key={exp.period} href={exp.company.url}>
            <div className="px-0 my-4 sm:my-0 md:p-4 rounded-md w-full grid gap-2 lg:grid-cols-[230px_1fr] sm:gap-0 hover:bg-primary/10 group">
              <div>
                <p className="hidden sm:inline text-gray-400 tracking-wide">
                  {exp.period}
                </p>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl mb-0 sm:mb-2 sm:tracking-wide relative flex flex-col md:flex-wrap gap-1 sm:flex-row group-hover:text-blue-300">
                  {exp.position}
                  <span className="hidden md:inline mx-2">•</span>
                  <div
                    className={`hidden sm:inline-flex items-center gap-2 align-middle `}
                  >
                    <Image
                      src={exp.company.logo}
                      alt={exp.company.name}
                      width={25}
                      height={25}
                      className="object-contain inline-block"
                    />
                    <span className={exp.company.style.text}>
                      {exp.company.name}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="hidden group-hover:inline-block"
                  />
                </h3>

                {/* Mobile view */}
                <div className="sm:hidden flex flex-row items-center flex-wrap">
                  <p className="text-sm text-gray-400 tracking-wide">
                    {exp.period}
                  </p>
                  <span className="inline mx-2">•</span>

                  <div
                    className={`text-sm flex flex-row items-center gap-0.5 align-middle font-mono`}
                  >
                    <Image
                      src={exp.company.logo}
                      alt={exp.company.name}
                      width={16}
                      height={16}
                      className="object-contain inline-block mr-1"
                    />
                    <span className={`${exp.company.style.text} text-sm`}>
                      {exp.company.name}
                    </span>
                  </div>
                </div>

                {/* All view */}
                <p className="text-gray-400 group-hover:text-gray-50">
                  {exp.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
