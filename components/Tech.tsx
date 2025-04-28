import {
  ArrowRight,
  Cat,
  Code,
  Database,
  FileCode,
  Layers,
  Layout,
  Palette,
  Server,
  Smile,
  Terminal,
  Triangle,
  Workflow,
  Zap,
  File,
  Table,
  GitMerge,
} from "lucide-react";
import { ReactNode, RefObject } from "react";

const Tech = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => {
  return (
    <section className="wrapper" id="stacks" ref={ref}>
      <h2>My Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {/* Frontend - Large Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-xl p-2 sm:p-6 md:col-span-2 border border-blue-100 dark:border-blue-900 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
              <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold">Frontend</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <TechItem name="React" icon={<Code />} color="text-blue-500" />
            <TechItem
              name="Next.js"
              icon={<ArrowRight />}
              color="text-black dark:text-gray-500"
            />
            <TechItem
              name="TypeScript"
              icon={<FileCode />}
              color="text-blue-600"
            />
            {/* <TechItem name="HTML" icon={<Globe />} color="text-orange-500" /> */}
            <TechItem
              name="Tailwind"
              icon={<Palette />}
              color="text-blue-400"
            />
            {/* <TechItem
              name="JavaScript"
              icon={<FileCode />}
              color="text-yellow-500"
            /> */}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 rounded-xl p-2 sm:p-6 md:col-span-2 border border-green-100 dark:border-green-900 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
              <Server className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold">Backend</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <TechItem
              name="Node.js"
              icon={<Terminal />}
              color="text-green-600"
            />
            <TechItem name="NestJS" icon={<Cat />} color="text-red-500" />
            <TechItem
              name="Express"
              icon={<Zap />}
              color="text-gray-600 dark:text-gray-300"
            />
            <TechItem name="Adonis" icon={<Triangle />} color="text-blue-500" />
          </div>
        </div>

        {/* Database */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/40 dark:to-violet-950/40 col-span-1 sm:col-span-2 lg:col-span-2 rounded-xl p-2 sm:p-6 border border-purple-100 dark:border-purple-900 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg">
              <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold">Database</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3">
            <TechItem name="MongoDB" icon={<File />} color="text-green-500" />
            <TechItem name="MySQL" icon={<Table />} color="text-blue-500" />
            <TechItem
              name="PostgreSQL"
              icon={<Table />}
              color="text-blue-500"
            />
          </div>
        </div>

        {/* Tools - Large Card */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 rounded-xl p-2 md:p-2 lg:p-6 col-span-1 md:col-span-2 lg:col-span-2 border border-amber-100 dark:border-amber-900 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-amber-100 dark:bg-amber-900/50 p-2 rounded-lg">
              <Terminal className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold">Tools & Workflow</h3>
          </div>
          <div className="grid grid-cols-3  gap-3">
            <TechItem
              name="Git"
              icon={<GitMerge />}
              color="dark:text-orange-700"
            />
            <TechItem name="Docker" icon={<Layers />} color="text-blue-500" />
            <TechItem
              name="GitHub Actions"
              icon={<Workflow />}
              color="text-gray-500"
            />
            <TechItem name="AWS" icon={<Smile />} color="text-yellow-600" />
            <TechItem name="Jest" icon={<Terminal />} color="text-red-500" />
            <TechItem name="Vercel" icon={<Triangle />} color="text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

function TechItem({
  name,
  icon,
  color,
}: {
  name: string;
  icon: ReactNode;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/50 dark:bg-black/10 border border-gray-100 dark:border-gray-800">
      <div className={`${color}`}>{icon}</div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

export default Tech;
