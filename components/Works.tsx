import WorkCard, { WorkCardProps } from "./WorkCard";
import { Stack, Work } from "@/enum";

const worksItems: WorkCardProps[] = [
  {
    title: "Sewa Hub",
    description:
      "An e-commerce website for renting occassion item like limited edition black vinyl, home appliances, kids party stuff in neighbourhood.",
    stacks: [Stack.NEXT, Stack.TAILWIND, Stack.MONGODB, Stack.VERCEL],
    type: [Work.FS],
    image: "/sewahub.png",
    link: "https://sewa-hub-three.vercel.app/",
    status: "In development",
  },
  {
    title: "Event scheduler",
    description:
      "Task scheduler to trigger recurrence processes in across microservices for internal use, such as for trigger both weekly report generation and data cleanup simultaneuosly.",
    stacks: [Stack.NEST, Stack.MONGODB, Stack.RABBITMQ],
    type: [Work.BE],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="75"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-calendar-sync-icon lucide-calendar-sync"
      >
        <path d="M11 10v4h4" />
        <path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
        <path d="M16 2v4" />
        <path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
        <path d="M21 22v-4h-4" />
        <path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" />
        <path d="M3 10h4" />
        <path d="M8 2v4" />
      </svg>
    ),
  },
  {
    title: "Hierarchy-based asset management",
    description:
      "Structuring asset data based on site hierarchy, e.g Country > Region > Zone > Site",
    stacks: [Stack.NEST, Stack.MONGODB],
    type: [Work.BE],
  },
  {
    title: "Audit trail",
    description:
      "Track user activities, including creating, modifying and deleting workspace data, with an overview displayed on the admin dashboard.",
    stacks: [Stack.NEST, Stack.MONGODB],
    type: [Work.BE],
  },
  {
    title: "RBAC authorization",
    description:
      "Develop role-based access control (RBAC) in microservices architecture to secure feature access, tied to SaaS subscription plans. This involves developing custom guard to enforce permissions and managing custom access control list (ACL) for role and resource mappings.",
    stacks: [Stack.NEST, Stack.MONGODB],
    type: [Work.BE],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="85"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-id-card-icon lucide-id-card"
      >
        <path d="M16 10h2" />
        <path d="M16 14h2" />
        <path d="M6.17 15a3 3 0 0 1 5.66 0" />
        <circle cx="9" cy="11" r="2" />
        <rect x="2" y="5" width="20" height="14" rx="2" />
      </svg>
    ),
  },
  {
    title: "IOT devices activation scheduler",
    description:
      "Schedule activation of sensors and feeders for aquafarming water quality and growth control.",
    stacks: [Stack.NEST, Stack.MONGODB, Stack.TASMOTA],
    type: [Work.BE],
  },
  {
    title: "Drone photogrammetry processor",
    description:
      "Image processor that ingest drone aerial images dataset to produce DSM/DTM/DEM, point cloud, and 3D mesh.",
    stacks: [Stack.OPENDRONEMAP, Stack.EXPRESS, Stack.MYSQL, Stack.AWS_S3],
    type: [Work.BE],
  },
  {
    title: "Label management",
    description:
      "Dynamic database of annotation labels either in vertical or horizontal form.",
    stacks: [Stack.EXPRESS, Stack.MYSQL],
    type: [Work.BE],
  },
  {
    title: "Block-based programming editor for microcontroller",
    description:
      "A programming editor that allows to produce code by arranging code blocks and uploads it to ESP32 microcontroller board. Written for Windows platform.",
    stacks: [Stack.HTML, Stack.CSS, Stack.JQUERY, Stack.C, Stack.ESP32],
    type: [Work.BE],
  },
  {
    title: "Product landing page",
    description:
      "Maintained product landing page for an educational robotic learning kit.",
    stacks: [Stack.HTML, Stack.BOOTSTRAP, Stack.VANILLAJS],
    type: [Work.BE],
  },
];

const Works = () => {
  const items = [worksItems[0], worksItems[1], worksItems[4]];

  return (
    <section className="wrapper" id="recent-works">
      <h2>Meet some of my works</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {items.map((item, _) => (
          <WorkCard key={_} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Works;
